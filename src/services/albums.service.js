import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const albumsService = {
    getAll:()=>axiosInstance(urls.albums)
}

export {albumsService};