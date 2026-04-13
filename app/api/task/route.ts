import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try{
        const body = request.body
        console.log(body);
    }
    catch(error){
        return NextResponse.json({error}, {status: 500})
    }
}