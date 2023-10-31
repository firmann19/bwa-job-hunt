import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET() {
	const categories = await prisma.industry.find();

	return NextResponse.json(categories);
}
