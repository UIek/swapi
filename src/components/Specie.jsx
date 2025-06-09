import React, { useState, useEffect } from 'react';

function Specie(props) {
  const [homeworld, sethomeworld] = useState()  
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);

  const [visible, setVisible] = useState({
    name: false,
    classification: false,
    designation: false,
    average_height: false,
    skin_colors: false,
    hair_colors: false,
    eye_colors: false,
    average_lifespan: false,
    language: false,
    homeworld: false,
    people: false,
    films: false,
  });

  const toggle = (field) => {
    setVisible((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  useEffect(() => {
    fetch(props.homeworld)
      .then((res) => res.json())
      .then((data) => sethomeworld(data.name))
      .catch(() => sethomeworld('unknown'));
  }, []);

  useEffect(() => {
    Promise.all(
      props.people.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => data.name)
      )
    ).then(setPeople);
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
    <div className="specie">
      <h1>{props.name}</h1>
      <div className='buttons'>
      {[
        ['classification', props.classification],
        ['designation', props.designation],
        ['average_height', props.average_height],
        ['skin_colors', props.skin_colors],
        ['hair_colors', props.hair_colors],
        ['eye_colors', props.eye_colors],
        ['average_lifespan', props.average_lifespan],
        ['language', props.language],
        ['homeworld', homeworld],
      ].map(([field, value]) => (
        <div key={field} className='button'>
          <button onClick={() => toggle(field)}>{field}</button>
          <p className={`${field} ${visible[field] ? 'activ' : ''}`}>
            {value}
          </p>
        </div>
      ))}

      {[
        ['people', people],
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

export default Specie;
