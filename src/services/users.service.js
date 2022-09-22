import {urls} from "../configs";
import {axiosInstance} from "./axios.service";

const usersService = {
    getAll:()=>axiosInstance(urls.users)
}

export {usersService};