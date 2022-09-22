import {useEffect, useState} from "react";

import {carsService} from "../../services";
import {Car} from "../car/Car";
import css from './Cars.module.css'
import {FormCar} from "../formCar/FormCar";

function Cars() {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data))
    }, [])


    return (<div>

            <FormCar/>

            <div className={css.Cars}>{cars.map((cars, index) => <Car key={index} cars={cars}/>)}</div>

        </div>
    );
}

export {Cars};




