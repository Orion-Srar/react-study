import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://api.spacexdata.com/v3/launches/'
});

const getCharacteristicsAxios = () => {
    return axiosInstance.get()
}

export {getCharacteristicsAxios};