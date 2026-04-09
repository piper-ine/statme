import { Prisma } from "@/app/generated/prisma/client";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body: Prisma.TodoCreateInput = await request.json();

        if (!body || !body.title) { 
            return NextResponse.json({ error: "Title is required" }, { status: 400 });
        }
        const baseDate = body.deadline ? new Date(body.deadline) : new Date();
        const deadline = body.deadline
            ? new Date(body.deadline) // ничего не трогаем
            : new Date(Date.now() + 24 * 60 * 60 * 1000); // +24 часа от текущего
        const newTodo = await prisma.todo.create({
            data: { ...body, deadline }
        });
        return NextResponse.json(newTodo, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: "Failed to create todo" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const tasks = await prisma.todo.findMany({
        });
        return NextResponse.json(tasks, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Failed to fetch tasks" }, { status: 500 });
    }
}
