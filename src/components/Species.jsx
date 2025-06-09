import React, { useState, useEffect } from 'react';
import Specie from './Specie';

function Species() {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    fetch("https://swapi.info/api/species")
      .then((res) => res.json())
      .then((json) => setSpecies(json))
      .catch((error) => console.error(error));
  }, []);

  function addSpecie({
    name,
    classification,
    designation,
    average_height,
    skin_colors,
    hair_colors,
    eye_colors,
    average_lifespan,
    language,
    homeworld,
    people,
    films
  }) {
    return (
      <Specie
        name={name}
        classification={classification}
        designation={designation}
        average_height={average_height}
        skin_colors={skin_colors}
        hair_colors={hair_colors}
        eye_colors={eye_colors}
        average_lifespan={average_lifespan}
        language={language}
        homeworld={homeworld}
        people={people}
        films={films}
      />
    );
  }

  return <div className='page'>{species.map((specie) => addSpecie(specie))}</div>;
}

export default Species;
