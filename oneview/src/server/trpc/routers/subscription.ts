import { publicProcedure, router } from "../trpc";

export const subscriptionRouter = router({
  get: publicProcedure.query(async () =>{ 
    let response = await fetch('https://ww2.txtav.com/api/PubsViewer/GetLibraries', {
      method: 'POST',
      body: JSON.stringify({user: 'mshahi@txtav.com', accessCode: process.env['ACCESS_CODE']}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let data = await response.json();
    return await data;
  })
});