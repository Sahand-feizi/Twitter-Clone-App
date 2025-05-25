import axios from "axios";

const BASE_URL = 'http://localhost:5000/api'

const app = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "application/json",
    }
})

const http = {
    get: app.get,
    post: app.post,
    patch: app.patch,
    delete: app.delete,
    put: app.put
}

export default http