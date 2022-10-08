import {axiosService} from "./axios.service";
import {urls} from "../configs";

const CommentsService = {
    getAll: axiosService.get(urls.comments)
}

export {
    CommentsService
}