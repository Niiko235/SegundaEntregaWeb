import React, {useContext, useState, useEffect} from 'react'
import './CardGoku.css'

import { ThemeContext } from '../../Context/themeContext'

import fondoRojo from '../../img/FondoRojo.png'
import fondoBlanco from '../../img/FondoBlanco.png'


const CardGoku = ({ personaje }) => {

    const {theme, setTheme} = useContext(ThemeContext);

    const [imagenFondo, setImagenFondo] = useState(fondoRojo);

    useEffect(() => {
        setImagenFondo(theme ? fondoRojo : fondoBlanco)
    }, [theme]);

    return (

        <>
        <div className='animate__animated animate__zoomInUp'>

            <div  className='contenedor'   id = {theme ? 'cardGokuClaro' : 'cardGokuOscuro'}>
                <div className='fondo'>
                    <div className='oscuro'>
                        <img id='rojo' src={imagenFondo} alt="..." />
                    </div>
                    <div className='imagen'>
                        <img id='goku' src={personaje.image} alt="..." />
                    </div>
                </div>
                <div className='reno'>
                    <h1>Nombre</h1>
                    <h3>{personaje.name}
                    </h3>
                    <h1>Raza</h1>
                    <h3>{personaje.race}</h3>

                </div>

            </div>
        </div>
        </>


    )
}

export default CardGoku