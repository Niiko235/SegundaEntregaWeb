import React, {useContext, useState, useEffect} from 'react'
import './CardTransformaciones.css'

import { ThemeContext } from '../../Context/themeContext'

import fondoRojo from '../../img/FondoRojo.png'
import fondoBlanco from '../../img/FondoBlanco.png'


const CardTransformaciones = ({ transformacion }) => {

    const {theme, setTheme} = useContext(ThemeContext);

    const [imagenFondo, setImagenFondo] = useState(fondoRojo);

    useEffect(() => {
        setImagenFondo(theme ? fondoRojo : fondoBlanco)
    }, [theme]);

    return (

        <>
            <div  className='contenedor' id = {theme ? 'CardTransformacionesClaro' : 'CardTransformacionesOscuro'}>
                <div className='fondo'>
                    <div className='oscuro'>
                        <img id='rojo' src={imagenFondo} alt="..." />
                    </div>
                    <div className='imagen'>
                        <img id='goku' src={transformacion.image} alt="..." />
                    </div>
                </div>
                <div className='reno'>
                    <h1>Nombre</h1>
                    <h3>{transformacion.name}
                    </h3>
                    <h1>Ki</h1>
                    <h3>{transformacion.ki}</h3>

                </div>

            </div>
        </>


    )
}

export default CardTransformaciones