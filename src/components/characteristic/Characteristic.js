function Characteristic(props) {

  const {characteristic} = props;

  return (<div>

        <h3>{characteristic.flight_number}.{characteristic.mission_name}_{characteristic.launch_year}</h3>
        <img src={characteristic.links.mission_patch_small} alt="{characteristic.mission_name}"/>

    </div>
  );
}

export {Characteristic};


