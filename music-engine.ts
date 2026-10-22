export type SongRequest = {
  mode:"style"|"lyrics";
  style:string;
  dialect:string;
  mood:string;
  voice:string;
  tempo:number;
  maqam:string;
  rhythm:string;
  instruments:string[];
  lyrics?:string;
};

export type EngineResult = {status:"ready"|"not_configured"; audioUrl?:string; message:string};

export async function generateSong(request:SongRequest):Promise<EngineResult>{
  const url=process.env.MUSIC_ENGINE_URL;
  if(!url) return {
    status:"not_configured",
    message:"محرك التوليد غير مربوط بعد. اربط MUSIC_ENGINE_URL بمحرك inference مفتوح المصدر مثل ACE-Step أو خادم متوافق."
  };
  const res=await fetch(`${url.replace(/\\/$/,"")}/generate`,{
    method:"POST",headers:{"content-type":"application/json"},
    body:JSON.stringify(request)
  });
  if(!res.ok) throw new Error(`Music engine returned ${res.status}`);
  return await res.json();
}