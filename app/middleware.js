//middleware.js

import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request){
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTc1NDkwNTU5Nn0.274QeHpornoGbQzkLxihw5JCt-UbFO4-qR0JmJXp2r4"
    // await request.headers.get("Authorization")?.split(" ")[1]
    if(!token){
        return NextResponse.json({message: "トークンがありません"})
    }
    try{
        const secretKey = new TextEncoder().encode("next-market-route-handlers")
        const decodedJwt = await jwtVerify(token, secretKey)
        return NextResponse.next()
    }catch{
        return NextResponse.json({message:"トークンが正しくないので、ログインしてください"})
    }
    return NextResponse.next()
}
export const config = {

}