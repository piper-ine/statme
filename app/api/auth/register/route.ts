import prisma from "@/app/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Хешируем пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Пытаемся создать пользователя
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return new Response(JSON.stringify({ message: "Пользователь создан" }), {
      status: 201,
    });
  } catch (error: any) {
    // Проверяем ошибку уникальности
    if (error.code === "P2002" && error.meta?.target?.includes("email")) {
      return new Response("Email уже занят", { status: 400 });
    }
    console.error(error);
    return new Response("Ошибка сервера", { status: 500 });
  }
}