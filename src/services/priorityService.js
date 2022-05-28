import axios from 'axios';

const baseUrl='https://personal-job-tracking-server.herokuapp.com/';

export const getPriorites = async ()=>{
  try {
    const res = await axios.get(baseUrl+'priorities');
    return res;
  } catch (error) {
    console.log(error);
  }
};