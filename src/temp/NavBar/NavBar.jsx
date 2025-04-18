import React, { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'

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
                <Link to={"/"} className='itemNav'> Home </Link>
                <Link to = {"/filter/Male"} className='itemNav'> Male </Link>
                <Link to = {"/filter/Female"} className='itemNav'> Female </Link>
                <Link to = {"/aboutUs"} className='itemNav'> About us </Link>
            </ul>


        </nav>
    </>
  )
}

export default NavBar