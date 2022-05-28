import axios from 'axios';

const baseUrl='http://localhost:5000/';

export const getPriorites = async ()=>{
  try {
    const res = await axios.get(baseUrl+'priorities');
    return res;
  } catch (error) {
    console.log(error);
  }
};