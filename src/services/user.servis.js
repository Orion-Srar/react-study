import {axiosInstance} from "../services";
import {urls} from "../configs";


const usersService = {
    getAll:()=>axiosInstance.get(urls.users)
}
const postsService = {
    getAll:(id)=>axiosInstance.get(urls.users + '/' + id + urls.posts)
}

export {usersService,postsService};