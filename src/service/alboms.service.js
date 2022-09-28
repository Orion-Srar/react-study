import {axiosService} from "./axios.service";
import {urls} from "../configs";

const albumsService = {
    getAll:()=>axiosService(urls.albums)
}

export {albumsService}