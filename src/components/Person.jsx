import React, { useState, useEffect } from 'react';

function Person(props) {
  const [planet, setplanet] = useState();
  const [species, setspecies] = useState();
  const [films, setfilms] = useState([]);
  const [vehicles, setvehicles] = useState([]);
  const [starships, setstarships] = useState([]);

  const [visible, setVisible] = useState({
    height: false,
    mass: false,
    hair_color: false,
    skin_color: false,
    eye_color: false,
    birth_year: false,
    gender: false,
    homeworld: false,
    species: false,
    films: false,
    vehicles: false,
    starships: false
  });

  const toggle = (field) => {
    setVisible((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  useEffect(() => {
    fetch(props.homeworld)
      .then((res) => res.json())
      .then((data) => setplanet(data.name))
      .catch(() => setplanet('unknown'));
  }, []);

  useEffect(() => {
    fetch(props.species)
      .then((res) => res.json())
      .then((data) => setspecies(data.name))
      .catch(() => setspecies('Human'));
  }, []);

  useEffect(() => {
    Promise.all(
      props.films.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => data.title)
      )
    ).then((titles) => setfilms(titles));
  }, []);

  useEffect(() => {
    Promise.all(
      props.vehicles.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => data.name)
      )
    ).then((vehicles) => setvehicles(vehicles));
  }, []);

  useEffect(() => {
    Promise.all(
      props.starships.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => data.name)
      )
    ).then((starships) => setstarships(starships));
  }, []);

  return (
    <div className="person">
      <h1>{props.name}</h1>
      <div className='buttons'>
      {[
        ['height', props.height],
        ['mass', props.mass],
        ['hair_color', props.hair_color],
        ['skin_color', props.skin_color],
        ['eye_color', props.eye_color],
        ['birth_year', props.birth_year],
        ['gender', props.gender],
        ['homeworld', planet],
        ['species', species]
      ].map(([field, value]) => (
        <div key={field} className='button'>
          <button onClick={() => toggle(field)}>{field}</button>
          <p className={`${field} ${visible[field] ? 'activ' : ''}`}>
             {value}
          </p>
        </div>
      ))}

      {[
        ['films', films],
        ['vehicles', vehicles],
        ['starships', starships]
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

export default Person;
