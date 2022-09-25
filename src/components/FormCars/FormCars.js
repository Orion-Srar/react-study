import {useForm} from "react-hook-form"
import {joiResolver} from '@hookform/resolvers/joi'

import {carValidator} from "../../validators/car.validator";
import {carsService} from "../../sercices/cars.service";
import {useEffect} from "react";

function FormCars({setCars, upCar, setUpCar}) {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'all'

    });

    useEffect(() => {
            if (upCar) {
                setValue('model', upCar.model, {shouldValidate: true})
                setValue('price', upCar.price, {shouldValidate: true})
                setValue('year', upCar.year, {shouldValidate: true})
            }
        },
        [setValue, upCar])


    const submit = async (obj) => {
        if (upCar){


        }else {
            const {data} = await carsService.create(obj);
        console.log(data);
        setCars(cars => [...cars, obj])
        reset()
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')} />
            {errors.model && <span>{errors.model.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})} />
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})} />
            <button disabled={!isValid}>{upCar ? 'Update' : 'Save'}</button>
        </form>
    );
}

export {FormCars};
