import {useEffect, useState} from "react";

import {getCharacteristicsAxios} from "../../services/spacex.spi.service";
import {Characteristic} from "../characteristic/Characteristic";

function Characteristics() {

  const [characteristics,setCharacteristics] = useState([]);

  useEffect(()=>{
    getCharacteristicsAxios().then(value => {
      // console.log(value);
      setCharacteristics(value.data)
    });
  },[])

  return (<div>

        {characteristics.map((characteristic,index) => (<Characteristic characteristic={characteristic} key={index} />))}

    </div>
  );
}

export {Characteristics};




