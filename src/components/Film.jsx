import React, { useState, useEffect } from 'react';

function Film(props) {
  const [characters, setcharacters] = useState([]);
  const [planets, setplanets] = useState([]);
  const [starships, setstarships] = useState([]);
  const [vehicles, setvehicles] = useState([]);
  const [species, setspecies] = useState([]);


  const [visible, setVisible] = useState({
    episode_id: false,
    opening_crawl: false,
    director: false,
    producer: false,
    release_date: false,
    characters: false,
    planets: false,
    starships: false,
    vehicles: false,
    species: false
  });

  const toggle = (field) => {
    setVisible((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  useEffect(() => {
    Promise.all(
      props.characters.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => data.name)
      )
    ).then(setcharacters);
  }, []);

  useEffect(() => {
    Promise.all(
      props.planets.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => data.name)
      )
    ).then(setplanets);
  }, []);

  useEffect(() => {
    Promise.all(
      props.starships.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => data.name)
      )
    ).then(setstarships);
  }, []);

  useEffect(() => {
    Promise.all(
      props.vehicles.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => data.name)
      )
    ).then(setvehicles);
  }, []);

  useEffect(() => {
    Promise.all(
      props.species.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((data) => data.name)
      )
    ).then(setspecies);
  }, []);

  return (
    <div className="film">
      <h1>{props.title}</h1>
      <div className='buttons'>
      {[
        ['episode_id', props.episode_id],
        ['opening_crawl', props.opening_crawl],
        ['director', props.director],
        ['producer', props.producer],
        ['release_date', props.release_date]
      ].map(([field, value]) => (
        <div key={field} className='button'>
          <button onClick={() => toggle(field)}>{field}</button>
          <p className={`${field} ${visible[field] ? 'activ' : ''}`}>
            {value}
          </p>
        </div>
      ))}

      {[
        ['characters', characters],
        ['planets', planets],
        ['starships', starships],
        ['vehicles', vehicles],
        ['species', species]
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

export default Film;
