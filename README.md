# Arabic AI Music

منصة Mobile-first عربية لصناعة الأغاني العربية والـArabic Rap.

## ما تم بناؤه
- واجهة RTL عربية.
- Style → Song و Style + Lyrics → Song.
- لهجات عربية متعددة.
- Styles عربية متعددة.
- Mood / Voice / Maqam / BPM.
- API منفصل لمحرك التوليد.
- جاهز لربط محرك inference مفتوح المصدر.

## تشغيل
```bash
npm install
npm run dev
```

## ربط محرك الصوت
ضع في `.env.local`:
```env
MUSIC_ENGINE_URL=https://your-inference-server
MUSIC_ENGINE_API_KEY=
```

المسار المتوقع:
`POST /generate`

> ملاحظة: الواجهة وحدها لا تولّد الصوت. الإنتاج الفعلي يحتاج inference server/GPU أو مزود تشغيل نموذج. هذه البنية تمنع وجود زر وهمي وتسمح بربط ACE-Step أو محرك متوافق لاحقًا.
