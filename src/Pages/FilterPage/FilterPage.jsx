import React, {useState, useEffect, useContext} from 'react'
import { useParams, Link} from 'react-router-dom'
import { ThemeContext } from '../../Context/themeContext'

import CardGoku from '../../Components/CardGoku/CardGoku'

import './FilterPage.css'

const FilterPage = () => {

  const {gender} = useParams();
  const [personajes, setPersonajes] = useState([]);     // arrays de los personajes
  const [items, setItems] = useState(0);                // numero total de personajes 
  const {theme, setTheme} = useContext(ThemeContext);   // hook del tema
  

  useEffect(()=>{                          
      fetch('https://dragonball-api.com/api/characters')
      .then(response => response.json())
      .then(data => {
        setItems(data.meta.totalItems)
      })
  
    },[]);
  
    useEffect(()=>{
      const fetchGender = async () => {
        await fetch(`https://dragonball-api.com/api/characters?limit=${items}`)
        .then(response => response.json())
        .then(data => setPersonajes(data.items))
        setPersonajes((personajes) => {
          return personajes.filter((personaje) => personaje.gender === gender);
        })
      }
      fetchGender();
    },[items, gender]);


  return (
    <>
      <main id = {theme ? 'mainClaro' : 'mainOscuro'}>
        {personajes.map((personajes)=>(
          <Link to={`/details/${personajes.id}`} key={personajes.id}>
            <CardGoku   key={personajes.id} personaje={personajes} />
          </Link>
        ))}
      </main>
    </>
  )
}

export default FilterPage