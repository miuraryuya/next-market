//app/api/item/readsingle/[id]/route.js
import { NextResponse } from "next/server";
import supabase from "@/app/utils/database";
export async function GET(request, context){
    const params = await context.params
    try{
        const {data, error } = await supabase.from("items").select().eq("id", params.id).single()//.single()は配列で渡されるデータを単一のオブジェクト形式に変換する
        if(error) throw new Error(error.message)
        return NextResponse.json({message: "アイテム読み取り成功（シングル）", singleItem: data})
    }catch(err){
        return NextResponse.json({message: `アイテム読み取り失敗（シングル）:${err}`})
    }
    
}