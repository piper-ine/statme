import { Prisma } from "@/app/generated/prisma/client";
import prisma from "@/app/lib/prisma";
import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try{
        const body: Prisma.TodoCreateInput = await request.json()

        if(!body){
            return NextResponse.json({error: "Fields is incorrect"}, {status: 400}) 
        }

        const newTodo = await prisma.todo.create({
            data: body
        })

        return NextResponse.json(newTodo, {status: 201})
    } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}