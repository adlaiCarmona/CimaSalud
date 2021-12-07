import axios from 'axios';

export const url = 'http://dd85-2806-1000-8003-5512-7009-dd24-67bc-d148.ngrok.io';

export default axios.create({
    baseURL: url
});

