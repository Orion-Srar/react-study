import {useEffect, useState} from "react";

import {getCharacteristicsAxios} from "../../services/spacex.spi.service";
import {Characteristic} from "../characteristic/Characteristic";

function Characteristics() {

  const [characteristics,setCharacteristics] = useState([]);

  useEffect(()=>{
    getCharacteristicsAxios().then(({data}) => {
      {
        const filter = data.filter(characteristic => (characteristic.launch_year !== "2020"));
        setCharacteristics(filter);
      }
    });
  },[])

  return (<div>

        {characteristics.map((characteristic,index) => (<Characteristic characteristic={characteristic} key={index} />))}

    </div>
  );
}

export {Characteristics};




