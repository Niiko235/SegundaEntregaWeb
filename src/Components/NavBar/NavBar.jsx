import React, { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'


import { ThemeContext } from '../../Context/themeContext'

import logoTemaClaro from '../../img/iconoTemaClaro.png'
import logoTemaOscuro from '../../img/iconoTemaOscuro.png'

const NavBar = () => {


    const [logo, setLogo] = useState(logoTemaClaro);
    const {theme, setTheme} = useContext(ThemeContext);

    const [icono, setIcono] = useState(false);

    const handleClickMenu = () => {
        if(icono){
            setIcono(!icono)
            console.log("eprezao");
            
        }
    }

    const handleClickIcono = () => {
        setIcono(!icono)
    }

    const handleClickTema = () =>{
        setTheme(!theme);
    }

    useEffect(()=>{
        setLogo( theme ? logoTemaClaro : logoTemaOscuro);
    }, [theme]);


  return (
    <>
        <nav id={theme ? 'claro' : 'oscuro'}>
            <div id='divIcon' onClick={handleClickTema}><img src={logo} alt="..." /></div>
            <div>
                <ul className={icono ? 'ul active' : 'ul'}>
                    <li><Link to={"/"} className='navItem' onClick={handleClickMenu}>Home</Link></li>
                    <li><Link to={"/filter/Male"}  className='navItem' onClick={handleClickMenu}>Male</Link></li>
                    <li><Link to={"/filter/Female"} className='navItem' onClick={handleClickMenu}>Female</Link></li>
                    <li><Link to = {"/aboutUs"} className='navItem' onClick={handleClickMenu}>About us</Link></li>
                </ul>
            </div>
            <div id="mobile" onClick={handleClickIcono}>
                <i id='bar' className={icono ? 'fas fa-times' : 'fas fa-bars' }></i>
            </div>
            
        </nav>
    </>
  )
}

export default NavBar