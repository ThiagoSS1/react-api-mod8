import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-api-banco.herokuapp.com/'
});

export {
    api
}