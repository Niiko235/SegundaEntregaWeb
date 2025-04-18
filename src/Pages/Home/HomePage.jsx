import {useState, useEffect, useContext} from 'react'
import { ThemeContext} from '../../Context/themeContext'
import { Link} from 'react-router-dom'

import CardGoku from '../../Components/CardGoku/CardGoku'

import './HomePage.css'

const HomePage = () => {

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
    fetch(`https://dragonball-api.com/api/characters?limit=${items}`)
    .then(response => response.json())
    .then(data => setPersonajes(data.items))
  },[items]);



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

export default HomePage