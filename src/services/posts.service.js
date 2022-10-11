import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postsService = {
    getAll: () => axiosService(urls.posts)
}

export {
    postsService
}