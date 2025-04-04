import { getTitle } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  const titles = await getTitle();
  return NextResponse.json(titles);
}

