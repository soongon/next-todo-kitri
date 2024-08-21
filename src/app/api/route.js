import { NextResponse } from "next/server";
  

//  GET::/api 경로로 접근하면 실행되는 함수
export async function GET() {
    return NextResponse.json({
        msg: "Hello Todos"
    });
}

// POST::/api 경로로 접근하면 실행되는 함수
export async function POST() {
    return NextResponse.json({
        msg: "Hello Todos POST"
    });
}

