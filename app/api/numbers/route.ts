import prisma from '../../../prisma/src/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search') || '';

  const numbers = await prisma.user.findMany({
    where: {
      phoneNumber: {
        contains: search,  // Filtering numbers based on user input
      },
    },
    select: {
      phoneNumber: true,
    },
  });

  return NextResponse.json({ numbers });
}
