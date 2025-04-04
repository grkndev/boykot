import { getData } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  const images = await getData();
  return NextResponse.json(images);
}

