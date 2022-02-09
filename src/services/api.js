import axios from 'axios';

export const key = "b39efa65f0e4ddca9088636c800f01366fafcd91";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;
