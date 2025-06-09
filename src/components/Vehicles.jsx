import React, { useState, useEffect } from 'react';
import Vehicle from './Vehicle';

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("https://swapi.info/api/vehicles")
      .then((res) => res.json())
      .then((json) => setVehicles(json))
      .catch((error) => console.error(error));
  }, []);

  function addVehicle({
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    vehicle_class,
    pilots,
    films
  }) {
    return (
      <Vehicle
        name={name}
        model={model}
        manufacturer={manufacturer}
        cost_in_credits={cost_in_credits}
        length={length}
        max_atmosphering_speed={max_atmosphering_speed}
        crew={crew}
        passengers={passengers}
        cargo_capacity={cargo_capacity}
        consumables={consumables}
        vehicle_class={vehicle_class}
        pilots={pilots}
        films={films}
      />
    );
  }

  return <div className='page'>{vehicles.map((vehicle) => addVehicle(vehicle))}</div>;
}

export default Vehicles;
