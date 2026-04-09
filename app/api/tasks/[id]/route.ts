import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const todoId = Number(id);

        if (isNaN(todoId)) {
            return Response.json({ error: "Invalid ID" }, { status: 400 });
        }
        const task = await prisma.todo.findUnique({
            where: { id: Number(id) },
            include: { category: true }
        });
        return NextResponse.json({ task }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch tasks" }, { status: 500 });
    }
}