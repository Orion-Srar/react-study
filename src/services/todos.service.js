import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const todosService = {
    getAll:()=>axiosInstance(urls.todos)
}

export {todosService};
