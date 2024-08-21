import { NextResponse } from "next/server";
  

//  GET::/api 경로로 접근하면 실행되는 함수
export async function GET() {
    // 몽고디비에 접속하여 데이터를 가져온다.
    // Mongoose 를 사용하여 접속..
    return NextResponse.json(
        [
            {
                id: 1,
                title: '빨래하기',
                description: '열심히 합니다.',
                isCompleted: false
            },
            {
                id: 2,
                title: '청소하기',
                description: '더 열심히 합니다.',
                isCompleted: false
            },
            {
                id: 3,
                title: '음악듣기',
                description: '대충 합니다.',
                isCompleted: true
            }
        ]
    );
}

// POST::/api 경로로 접근하면 실행되는 함수
export async function POST() {
    return NextResponse.json({
        msg: "Hello Todos POST"
    });
}

