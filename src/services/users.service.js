import {axiosInstance} from "./index";

const usersService = {
    getAll:()=>axiosInstance()
}

export {usersService};