import React, {useState, useEffect, useContext} from 'react'
import './ErrorPage.css'
import { Link, useParams } from 'react-router-dom'
import { ThemeContext } from '../../Context/themeContext'
import gif from '../../img/gif_error.gif'

const ErrorPage = () => {
    const {theme, setTheme} = useContext(ThemeContext);
  return (
    <>
       <main id='errorPage' className = {theme ? 'errorClaro ' : 'errorOscuro'}>
          <h1>¡Error 404 not found!</h1>
          <img src={gif} alt="" className='gif' />
          <div id='btnError'>
            <Link to={"/"} >back to home</Link>
          </div>
       </main>
    </>
  )
}
   
export default ErrorPage