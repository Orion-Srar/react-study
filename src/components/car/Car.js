import css from './Car.module.css'

function Car({cars}) {
    const {id, model, price, year} = cars;

    return (<div className={css.Car}>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
        </div>
    );
}

export {Car};

// https://www.youtube.com/watch?v=fDNiM_WM2B8
// http://owu.linkpc.net/api/v2/cars