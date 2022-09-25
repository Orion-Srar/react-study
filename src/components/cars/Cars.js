import {useEffect, useState} from "react";
import {carsService} from "../../sercices/cars.service";
import {Car} from "../car/Car";
import {FormCars} from "../FormCars/FormCars";

function Cars() {

    const [cars,setCars] = useState([]);
    const [upCar,setUpCar] = useState(null);

    useEffect(()=>{
        carsService.getAll().then(({data}) => setCars(data))
    },[cars])


    return (

        <div>

            <FormCars setCars={setCars} upCar={upCar} />

            {
                cars.map(car => <Car key={car.id} car={car} setCars={setCars} setUpCar={setUpCar}  />)
            }


        </div>
    );
}

export {Cars};
