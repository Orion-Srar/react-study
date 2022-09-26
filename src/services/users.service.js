import {axiosInstance} from "./axios.service";

import {urls} from "../configs";

const usersService = {
    getAll:()=>axiosInstance(urls.users),
    getById:(id)=>axiosInstance(urls.users + '/' + id),
}

export {usersService}