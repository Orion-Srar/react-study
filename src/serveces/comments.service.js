import {axiosService} from "./axios.service";
import {urls} from "../configs";

const commentsService = {
    getAll:()=>axiosService(urls.comments)
}

export {
    commentsService
}