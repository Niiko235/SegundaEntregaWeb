import {useContext} from 'react'
import './App.css'

import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import ScrollToTop  from './Components/ScrollToTop/ScrollToTop'


import { ThemeContextProvider} from './Context/themeContext'
import 'animate.css';


import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import HomePage from './Pages/Home/HomePage'
import FilterPage from './Pages/FilterPage/FilterPage'
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage'
import DetailsPage from './Pages/DetailsPage/DetailsPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage'





const App = () => {

  
   
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ThemeContextProvider>
        <NavBar/>
         <Routes> 
            <Route path='/' element={<HomePage/>}/>
            <Route path='/filter/:gender' element={<FilterPage/>}/>
            <Route path='/aboutUs' element={<AboutUsPage/>}/>
            <Route path='/details/:id' element={<DetailsPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
         </Routes>
         <Footer/>
        </ThemeContextProvider>
      </BrowserRouter>
      
        
    </>
    
  )
}

export default App