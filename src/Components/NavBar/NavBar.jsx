import React, { useState, useEffect, useContext } from 'react'
import './NavBar.css'

import { ThemeContext } from '../../Context/themeContext'

import iconoTemaClaro from '../../img/iconoTemaClaro.png'
import iconoTemaOscuro from '../../img/iconoTemaOscuro.png'


const NavBar = () => {

    const [icono, setIcono] = useState(iconoTemaClaro);
    const {theme, setTheme} = useContext(ThemeContext);

    const cambiarTema = () =>{
        setTheme(!theme);
    }

    useEffect(()=>{
        setIcono( theme ? iconoTemaClaro : iconoTemaOscuro);
    }, [theme]);


  return (
    <>
        <nav id = {theme ? 'claro' : 'oscuro' }>

            <div id="icon" onClick={cambiarTema}>
                <img src= {icono} alt="" />
            </div>

            <ul>
                <li>Home</li>
                <li>Masculino</li>
                <li>Femenino</li>
                <li>Acerca de</li>
            </ul>


        </nav>
    </>
  )
}

export default NavBar