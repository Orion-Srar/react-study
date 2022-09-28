import {axiosService} from "./axios.service";
import {urls} from "../configs";

const commentsService = {
    getAll:(postId)=>axiosService(urls.posts + '/' + postId + '/comments')
}

export {commentsService}