import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const { name } = await request.json()
    let message = {
        morning: 'Good',
        name: name
    }
   
    return NextResponse.json({ message })
}