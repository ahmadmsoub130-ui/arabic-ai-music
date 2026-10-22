import {NextResponse} from "next/server";
import {generateSong} from "@/lib/music-engine";
export async function POST(req:Request){
 try{
  const body=await req.json();
  if(!body.style) return NextResponse.json({error:"style is required"},{status:400});
  return NextResponse.json(await generateSong(body));
 }catch(e){
  return NextResponse.json({error:e instanceof Error?e.message:"Generation failed"},{status:500});
 }
}