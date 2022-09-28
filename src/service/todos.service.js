import {axiosService} from "./axios.service";
import {urls} from "../configs";

const todosService = {
    getAll:()=>axiosService(urls.todos)
}

export {todosService}