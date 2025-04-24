import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ThemeContext } from '../../Context/themeContext'


import SuperCard from '../../Components/SuperCard/SuperCard'
import CardTransformaciones from '../../Components/CardTransformaciones/CardTransformaciones'
import imageTransformations from '../../img/transformaciones.png'

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
      .catch(console.log("Error de carga en los datos de la API en la pagina datails"))
  }, []);

  return (
    <>
      <main id = {theme ? 'mainClaro' : 'mainOscuro'}>
        
        <SuperCard key={personaje.id} personaje={personaje}/>
        {/* <div id="contenedorTransformaciones"> */}
          {transformaciones.length === 0 ? null :(
            <>
              <header>
              <img src={imageTransformations} alt="..." />
              </header>
              {transformaciones.map((i) => (
              <CardTransformaciones key={i.id} transformacion = {i}/>
              ))}
            </>
          )}
        {/* </div> */}
      </main>
    </>
  )
}

export default DetailsPage