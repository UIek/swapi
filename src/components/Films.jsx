import React, {useState, useEffect} from 'react'
import Film from './Film'

function Films() {
    function add_film({title,episode_id,opening_crawl,director,producer,release_date,characters,planets,starships,vehicles,species}){
        return(
            <Film
                title={title}
                episode_id={episode_id}
                opening_crawl={opening_crawl}
                director={director}
                producer={producer}
                release_date={release_date}
                characters={characters}
                planets={planets}
                starships={starships}
                vehicles={vehicles}
                species={species}
            />
        )
    }
    const [films,setfilms] = useState([])

    useEffect(()=>{
        fetch("https://swapi.info/api/films")
        .then((res) => res.json())
        .then((json) => setfilms(json))
        .catch((error) => console.error(error))
    },[])
    

  return (
    <div className='page'>{films.map((film)=>add_film(film))}</div>
  )
}

export default Films