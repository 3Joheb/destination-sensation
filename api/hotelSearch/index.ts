// api/hello.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import getAuthToken from './getAuthToken.js';
const url = 'https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=MCLONGHM&adults=1';

const params = {
    hotelids: 'MCLONGHM', 
    adults: '1'  
  };
  
  const queryString = new URLSearchParams(params);
  
    export default async (req: VercelRequest, res: VercelResponse) => {
      const auth = await getAuthToken()
      if("error" in auth){
        res.json("error")
      }else{
        const options: RequestInit = {
  
          headers: {
              'Authorization': `${auth['token_type']} ${auth['access_token']}`
          }
      }
      console.log(auth)
      const hotelReq = await fetch(`${url}`,options)
      const hotelData = await hotelReq.json(); 
      
      //const hotelNames = hotelData.data.map(hotel => hotel.name);
    
      res.json({ hotels: hotelData });
      }
      
    };