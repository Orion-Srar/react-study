import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const postsService = {
    getAll:(userId)=>axiosInstance(urls.posts + '/?userId=' + userId )
}

export {postsService}


