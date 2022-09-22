import {useForm} from "react-hook-form";

function FormCar() {

  const {register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm();

const submit = (car) => {
    console.log(car);

}

  return (
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder={'model'} {...register('model')}  />
        <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})} />
        <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})} />
        <button>Save</button>
    </form>
  );
}

export {FormCar};
