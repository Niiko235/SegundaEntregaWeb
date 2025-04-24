import {useContext} from 'react'
import './AboutUsPage.css'
import nico from '../../img/nico.png'
import juli from '../../img/juli.png'
import {ThemeContext} from '../../Context/themeContext'
import imageAboutUs from '../../img/FotoAboutUs.png'

const AboutUsPage = () => {

  const {theme, setTheme} = useContext(ThemeContext);   // hook del tema

  return (
    <>
    <main id = {theme ? 'mainClaro' : 'mainOscuroB'}>
      {/* <div id='principal'> */}
        <header>
          <img src={imageAboutUs} alt="..." />
        </header>
        <hr id='linea'/>
        <div id='tituloPrincipal'>
            <h3>Conoce el equipo que se encargo del desarrollo de esta pagina</h3>
        </div>
        <div id='contenedor'>
          <div id='nico'>
            <div id='foto'>
              <div id='nicoImagen'>
                <img  src={nico} alt="" />
              </div>
            </div>
            <div id='palabras'>
              <h1>Nombre</h1>
              <p>Nicolas Eduardo Rios Plaza</p>
              <h1>Edad</h1>
              <p>20</p>
              <h1>Posición Semestral</h1>
              <p>Quinto Semestre</p>
              <h1>Curso</h1>
              <p>Programación Web</p>
              <h1>Lugar de Residencia</h1>
              <p>Florencia - Caquetá</p>
            </div>
          </div>
          <div id='julian'>
            <div id='fotoJuli'>
              <div id='juliImagen'>
                <img  src={juli} alt="" />
              </div>
            </div>
            <div id='palabrasJuli'>
              <h1>Nombre</h1>
              <p>Julian David Narvaez Sepulveda</p>
              <h1>Edad</h1>
              <p>18</p>
              <h1>Posición Semestral</h1>
              <p>Quinto Semestre</p>
              <h1>Curso</h1>
              <p>Programación Web</p>
              <h1>Lugar de Residencia</h1>
              <p>Florencia - Caquetá</p>
            </div>
          </div>
        </div> 

      {/* </div> */}
      <br />
    </main>
    </>
  )
}

export default AboutUsPage