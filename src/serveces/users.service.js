import {axiosService} from "./axios.service";
import {urls} from "../configs";

const usersService = {
    getAll:()=> axiosService(urls.users)
}

export {
    usersService
}