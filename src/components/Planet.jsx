import React, { useState, useEffect } from 'react';

function Planet(props) {
  const [residents, setResidents] = useState([]);
  const [films, setFilms] = useState([]);

  const [visible, setVisible] = useState({
    rotation_period: false,
    orbital_period: false,
    diameter: false,
    climate: false,
    gravity: false,
    terrain: false,
    surface_water: false,
    population: false,
    residents: false,
    films: false
  });

  const toggle = (field) => {
    setVisible((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  useEffect(() => {
    Promise.all(
      props.residents.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => data.name)
      )
    ).then(setResidents);
  }, []);

  useEffect(() => {
    Promise.all(
      props.films.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => data.title)
      )
    ).then(setFilms);
  }, []);

  return (
    <div className="planet">
      <h1>{props.name}</h1>
      <div className='buttons'>
      {[
        ['rotation_period', props.rotation_period],
        ['orbital_period', props.orbital_period],
        ['diameter', props.diameter],
        ['climate', props.climate],
        ['gravity', props.gravity],
        ['terrain', props.terrain],
        ['surface_water', props.surface_water],
        ['population', props.population]
      ].map(([field, value]) => (
        <div key={field} className='button'>
          <button onClick={() => toggle(field)}>{field}</button>
          <p className={`${field} ${visible[field] ? 'activ' : ''}`}>
            {value}
          </p>
        </div>
      ))}

      {[
        ['residents', residents],
        ['films', films]
      ].map(([field, list]) => (
        <div key={field} className='button'>
          <button onClick={() => toggle(field)}>{field}</button>
          <ul className={`${field} ${visible[field] ? 'activ' : ''}`}>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      </div>
      
    </div>
  );
}

export default Planet;
