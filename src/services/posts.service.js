import {axiosInstance} from "./axios.service";

import {urls} from "../configs";

const postsService = {
    getAll:()=>axiosInstance(urls.posts)
}

export {
    postsService
}