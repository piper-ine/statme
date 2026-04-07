import prisma from "@/app/lib/prisma";
import bcrypt from "bcrypt"

import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

export async function POST(req:Request) {
    const {email, password} = await req.json()
    
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if(!user) {
        return new Response("User not found", {status: 404})
    }
    const isValid = await bcrypt.compare(password, user.password)

    if(!isValid){
        return new Response("Invalid password", {status: 401})
    }

    const token = jwt.sign(
        {userId: user.id},
        process.env.JWT_SECRET!,
        {expiresIn: "1d"}
    )

    ;(await cookies()).set("token", token, {
        httpOnly: true,
        secure: true
    })
    
    return Response.json({message: "Logged in"})
}
