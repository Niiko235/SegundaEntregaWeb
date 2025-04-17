import React from 'react'
import './CardGoku.css'


const CardGoku = ({ personaje }) => {
    return (

        <>
            <div  className='contenedor'>
                <div className='fondo'>
                    <div className='oscuro'>
                        <img id='rojo' src="https://img.freepik.com/vector-gratis/red-medias-tintas-patron-fondo-vector-diseno-circulos-diferentes-tamanos_1164-1186.jpg" alt="..." />
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
        </>


    )
}

export default CardGoku