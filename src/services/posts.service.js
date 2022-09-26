import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const postsService = {
    getById:(id)=>axiosInstance(urls.posts + '/' + id)
}

export {
    postsService
}