# LIFF Demo

## Disclaimer
* This repo is used to demonstrate how to use the Line Frontend Framework (LIFF) with Next.js.
* I am a noob programmer.
* I apologize if there are any errors, and please let me know.


## How to use (TL; DR)

1. First, Install the required package.
```bash
npm i
```

2. Add LIFF_ID to env , you can get LIFF_ID from [`LINE Developer Console`](https://developers.line.biz/en/)
```
NEXT_PUBLIC_LIFF_ID=<your_liff_id>
```

3. Run the development server:
```bash
npm run dev
```

4. Local Previews (ngrok , cloudflared tunnel , vs code port forward) and then you will get a public URL with HTTPS.
```bash
# ngrok
ngrok http 3000
```

5. Edit callback URL with URL from local preview in LINE Developer Console