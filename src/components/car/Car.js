import css from "./Car.module.css"
import {carsService} from "../../sercices/cars.service";

function Car({car, setCars,setUpCar}) {

    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carsService.deleteById(id);
        setCars = (cars => {
            const index = cars.findIndex(value => value.id === id);
            cars.splice(index, 1)
            return [...cars]
        })
    }



    return (<div className={css.Car}>
            <div>
                <div>id:{id}</div>
                <div>model:{model}</div>
                <div>price:{price}</div>
                <div>year:{year}</div>
            </div>
            <div>
                <button onClick={() => setUpCar(car)}>Update</button>
                <button onClick={() => deleteCar()}>Delete</button>
            </div>

        </div>
    );
}

export {Car};
