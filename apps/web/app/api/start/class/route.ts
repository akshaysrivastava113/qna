import { NextRequest, NextResponse } from "next/server";

export default function POST (req: NextRequest) {

    //create db instance
    NextResponse.status(200).json(
        {
            "msg": "success"
        }
    );
}