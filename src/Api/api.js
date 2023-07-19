import axios from "axios";

const instance = axios.create({
    baseURL: 'http://3.34.144.155:8080/api/'
})

export default instance