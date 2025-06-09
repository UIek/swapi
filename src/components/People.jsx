import React, {useState, useEffect} from 'react'
import Person from './Person'

function People() {
    function add_person({id,name,height,mass, hair_color,skin_color,eye_color,birth_year,gender,homeworld,species,films,vehicles,starships}){
        return(
            <Person
            // key={id}
            // id={id}
            name={name}
            height={height}
            mass={mass}
            hair_color={hair_color}
            skin_color={skin_color}
            eye_color={eye_color}
            birth_year={birth_year}
            gender={gender}
            homeworld={homeworld}
            species={species}
            films={films}
            vehicles={vehicles}
            starships={starships}
            />
        )
    }
    
    const[people,setpeople] = useState([])
    useEffect(()=>{
        fetch("https://swapi.info/api/people")
        .then(res => res.json())
        .then(data => setpeople(data))
        .catch(err => console.error(err))
    },[])

  return (
    <div className='page'>{people.map((Person)=>add_person(Person))}</div>
  )
}

export default People