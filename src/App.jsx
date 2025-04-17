import {useEffect, useState} from 'react';
import './App.css'

import Header from './Components/Header/Header'
import CardMui from './Components/CardMui/CardMui';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage'

import Pagination from '@mui/material/Pagination'
import NavBar from './Components/NavBar/NavBar';



const App = () => {

  const [characters, setCharacters] = useState([]);
  const [pgs, setPgs] = useState(0);


  useEffect(()=>{
    fetch('https://dragonball-api.com/api/characters')
    .then(response => response.json())
    .then(data => {
      setCharacters(data.items)
      setPgs(data.meta.totalPages)
    })
    .catch(()=>(console.log("no hay net")));    
  }, []);

  const handlePagination = (event, page) => {
    fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=10`)
    .then(response => response.json())
    .then(data => setCharacters(data.items))
    .catch(()=>(console.log("no hay net")));   
  }
  

  

  return (
    <>
      <NavBar/>
      <Header id='Header'/>

    </>
  )
}

export default App