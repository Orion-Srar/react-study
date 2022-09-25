import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const carsService = {
    getAll: () => axiosInstance(urls.cars),
    create: (car) => axiosInstance.post(urls.cars, car),
    getById: (id) => axiosInstance(urls.cars + '/' + id),
    updateById: (id)=> axiosInstance.put(urls.cars + '/' + id),
    deleteById: (id)=> axiosInstance.delete(urls.cars + '/' + id)
}

export {carsService};

