import React, { useState, useEffect } from 'react';

function Starship(props) {
  const [films, setFilms] = useState([]);
  const [pilots, setPilots] = useState([]);

  const [visible, setVisible] = useState({
    name: false,
    model: false,
    manufacturer: false,
    cost_in_credits: false,
    length: false,
    max_atmosphering_speed: false,
    crew: false,
    passengers: false,
    cargo_capacity: false,
    consumables: false,
    hyperdrive_rating: false,
    MGLT: false,
    starship_class: false,
    pilots: false,
    films: false
  });

  const toggle = (field) => {
    setVisible((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  useEffect(() => {
    Promise.all(
      props.films.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => data.title)
      )
    ).then(setFilms);
  }, []);

  useEffect(() => {
    Promise.all(
      props.pilots.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => data.name)
      )
    ).then(setPilots);
  }, []);

  return (
    <div className="starship">
      <h1>{props.name}</h1>
      <div className='buttons'>
      {[
        ['model', props.model],
        ['manufacturer', props.manufacturer],
        ['cost_in_credits', props.cost_in_credits],
        ['length', props.length],
        ['max_atmosphering_speed', props.max_atmosphering_speed],
        ['crew', props.crew],
        ['passengers', props.passengers],
        ['cargo_capacity', props.cargo_capacity],
        ['consumables', props.consumables],
        ['hyperdrive_rating', props.hyperdrive_rating],
        ['MGLT', props.MGLT],
        ['starship_class', props.starship_class],
      ].map(([field, value]) => (
        <div key={field} className='button'>
          <button onClick={() => toggle(field)}>{field}</button>
          <p className={`${field} ${visible[field] ? 'activ' : ''}`}>
            {value}
          </p>
        </div>
      ))}

      {[
        ['pilots', pilots],
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

export default Starship;
