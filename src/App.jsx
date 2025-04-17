import {useState, useEffect, useContext} from 'react'
import './App.css'

import { ThemeContext} from './Context/themeContext'

import CardGoku from './Components/CardGoku/CardGoku'
import NavBar from './Components/NavBar/NavBar'


const App = () => {

  const [personajes, setPersonajes] = useState([]);
  const [items, setItems] = useState(1);

  const {theme, setTheme} = useContext(ThemeContext);
  
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
        <NavBar/>
        <main id = {theme ? 'mainClaro' : 'mainOscuro'}>
          {personajes.map((personajes)=>(
            <CardGoku   key={personajes.id} personaje={personajes} />
          ))}
        </main>
    </>
    
  )
}

export default App