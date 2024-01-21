import { NextRequest, NextResponse } from "next/server";

export function POST(request: NextRequest) {
  try {
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
