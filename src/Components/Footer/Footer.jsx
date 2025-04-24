import React, { useContext }  from 'react'
import { ThemeContext } from '../../Context/themeContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css'


const Footer = () => {

    const {theme, setTheme} = useContext(ThemeContext);
    // const {theme, setTheme} = useContext(ThemeContext);   // hook del tema

  return (
    <>
        <footer className={theme ? 'footerClaro' : 'footerOscruo'}>
            <div id='github'>
                <GitHubIcon id = 'iconoGit'/>
                <a href="https://github.com/Niiko235/SegundaEntregaWeb"><h2>Enlace proyecto</h2></a>
            </div>
            <hr />
            <div>
                <p>By Nicolas and Julian</p>
            </div>
        </footer>
    </>
  )
}

export default Footer