import {urls} from "../configs";
import {axiosInstance} from "./axeos.service";

const carsService = {
    getAll:()=>axiosInstance.get(urls.cars),
    create:(car)=>axiosInstance.post(urls.cars,car),
    getById:(id)=>axiosInstance(urls.cars + '/' + id),
    updateById:(id)=>axiosInstance.put(urls.cars + '/' + id),
    deleteById:(id)=>axiosInstance.delete(urls.cars + '/' + id)
}

export {carsService};