import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ThemeContext } from '../../Context/themeContext'

import CardGoku from '../../Components/CardGoku/CardGoku'

import './DetailsPage.css'

const DetailsPage = () => {

  const {id} = useParams();


  const [personaje, setPersonaje] = useState({});
  const [transformaciones, setTransformaciones] = useState([]);
  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(() =>{
    fetch('https://dragonball-api.com/api/characters/'+id) 
      .then(response => response.json())
      .then(data => {
        setPersonaje(data)
        setTransformaciones(data.transformations)
      })
  }, []);

  return (
    <>
      <div>{personaje.description}</div>
      <main id = {theme ? 'mainClaro' : 'mainOscuro'}>
        {transformaciones.map((i) => {
         return <img src={i.image} alt="" />
        })}
      </main>
    </>
  )
}

export default DetailsPage