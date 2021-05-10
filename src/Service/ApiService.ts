import axios, {AxiosRequestConfig} from 'axios';

const serverHostName = 'http://localhost:3000';

axios.defaults.baseURL = serverHostName;
axios.defaults.headers['Accept'] = 'application/json';
axios.defaults.headers['app-key'] = 'beinest'; //Secret key to align with server
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json'; 
axios.defaults.xsrfCookieName = 'XSRF-TOKEN'; 
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN'; 

export const axiosGet = (url: string, params: object): object => {
    let config: AxiosRequestConfig = {
        params: params
    }
    return axios.get(url, config);
}