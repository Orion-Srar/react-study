import {axiosService} from "./axios.service";
import {urls} from "../configs";

const albumService = {
    getAll: ()=> axiosService(urls.albums)
}

export {
    albumService
}