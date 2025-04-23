import React, { useContext } from 'react'
import './SuperCard.css'
import { ThemeContext } from '../../Context/themeContext'

const SuperCard = ({personaje}) => {

    const {theme, setTheme} = useContext(ThemeContext);
  return (
    <>

        <div id='superCard'>
             <section id="imagenPrincipal">
                <img src={personaje.image} alt="" />
            </section>
            <div id='card'>
                <section id='informacion'  className={theme?'cartaClara':'cartaOscura'}>
                    <article>
                        <h1>Nombre</h1>
                        <p>{personaje.name}</p>
                        <h1>Genero</h1>
                        <p>{personaje.gender}</p>
                        <h1>Raza</h1>
                        <p>{personaje.race}</p>
                    </article>
                    <article>
                        <h1>Ki</h1>
                        <p>{personaje.ki}</p>
                        <h1>Ki maximo</h1>
                        <p>{personaje.maxKi}</p>
                        <h1>Afiliacion</h1>
                        <p>{personaje.affiliation}</p>
                    </article>
                </section>
                <section id='descripcion' className={theme?'cartaClara':'cartaOscura'}>
                    <article>
                        <h1>Descripcion</h1>
                        <p>{personaje.description}</p>
                    </article>
                </section>
            </div>
        </div>
    </>
  )
}

export default SuperCard