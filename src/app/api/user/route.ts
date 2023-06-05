import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function PUT(req: Request) {
  try {
    const { email, name, id } = await req.json();

    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        email,
        name,
      },
    });

    return NextResponse.json({
      user: { email: user.email, user: user.name },
    });
  } catch (err: any) {
    return new NextResponse(
      JSON.stringify({
        error: err.message,
      }),
      { status: 500 }
    );
  }
}
