import {axiosInstance} from "./index";

const rocketService = {
    getAll:()=>axiosInstance()
}

export {rocketService};