import React, {useState, useEffect} from 'react'
import Planet from './Planet'

function Planets() {
    function add_planet({name,rotation_period,orbital_period,diameter,climate,gravity,terrain,surface_water,population,residents,films}){
        return(
            <Planet
                name={name}
                rotation_period={rotation_period}
                orbital_period={orbital_period}
                diameter={diameter}
                climate={climate}
                gravity={gravity}
                terrain={terrain}
                surface_water={surface_water}
                population={population}
                residents={residents}
                films={films}
            />
        )
    }
    const [planets,setplanets] = useState([])

    useEffect(()=>{
        fetch("https://swapi.info/api/planets")
        .then((res) => res.json())
        .then((json) => setplanets(json))
        .catch((error) => console.error(error))
    },[])
    

  return (
    <div className='page'>{planets.map((planet)=>add_planet(planet))}</div>
  )
}

export default Planets