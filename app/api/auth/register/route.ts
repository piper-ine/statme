import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import bcrypt from "bcrypt"

export async function POST(req:Request) {
    try {
        const {email, password, name} = await req.json()
        if(!email || !password) {
            return NextResponse.json({error: "Missing data"}, {status: 400})
        }
        const existing = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if(existing){
            return NextResponse.json({error: "email is busy"})
        }
        const user = await prisma.user.create({
            data: {
                email, 
                password: await bcrypt.hash(password, 10),
                name
            }
        })
        return NextResponse.json({user}, {status: 201})
    }catch{
        return NextResponse.json({error: "Somethimg went wrong"}, {status: 500})
    }
}