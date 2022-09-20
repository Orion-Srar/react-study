import {axiosInstance} from "../services";
import {urls} from "../configs";


const userService = {
    getAll:()=>axiosInstance.get(urls.users)
}

export {userService};