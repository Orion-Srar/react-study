import {axiosService} from "./axios.services";
import {urls} from "../configs";

const usersService = {
    getAll:()=>axiosService(urls.users),
    create:()=>axiosService.post(urls.users)
}

export {usersService};