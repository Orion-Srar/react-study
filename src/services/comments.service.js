import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const commentsService = {
    getAll:()=>axiosInstance(urls.comments)
}

export {commentsService};