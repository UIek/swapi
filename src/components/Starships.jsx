import React, { useState, useEffect } from 'react';
import Starship from './Starship';

function Starships() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    fetch("https://swapi.info/api/starships")
      .then((res) => res.json())
      .then((json) => setStarships(json))
      .catch((error) => console.error(error));
  }, []);

  function addStarship({
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
    hyperdrive_rating,
    MGLT,
    starship_class,
    pilots,
    films
  }) {
    return (
      <Starship
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
        hyperdrive_rating={hyperdrive_rating}
        MGLT={MGLT}
        starship_class={starship_class}
        pilots={pilots}
        films={films}
      />
    );
  }

  return <div className='page'>{starships.map((ship) => addStarship(ship))}</div>;
}

export default Starships;
