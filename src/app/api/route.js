import { ConnectDB } from "@/lib/db";
import { TodoModel } from "@/lib/todo";
import { NextResponse } from "next/server";


const loadDB = async () => {
    await ConnectDB();
}
  
loadDB();

//  GET::/api 경로로 접근하면 실행되는 함수
export async function GET() {
    // 몽고디비에 접속하여 데이터를 가져온다.
    const todos = await TodoModel.find({});
    return NextResponse.json(todos);
}

// POST::/api 경로로 접근하면 실행되는 함수
// 클라이언트에서 투두 데이터를 전달해서 db에 인서트 하는 코드
export async function POST(request) {

    const {title, description} = await request.json();

    TodoModel.create({
        title,
        description
    });

    return NextResponse.json({
        msg: "Todo created.."
    });
}

