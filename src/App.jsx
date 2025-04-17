import {useState, useEffect} from 'react'
import './App.css'
import CardGoku from './components/CardGoku/CardGoku'

const App = () => {

  const [personajes, setPersonajes] = useState([]);
  const [items, setItems] = useState(1);
  
  useEffect(()=>{
    fetch('https://dragonball-api.com/api/characters')
    .then(response => response.json())
    .then(data => {
      setItems(data.meta.totalItems)
    })

  },[]);

  useEffect(()=>{
    fetch(`https://dragonball-api.com/api/characters?limit=${items}`)
    .then(response => response.json())
    .then(data => setPersonajes(data.items))
  },[items]);
   
  return (

    <>
      <main>

        {
          personajes.map((personajes)=>(
            <CardGoku   key={personajes.id} personaje={personajes} />
          ))
        }
        
      </main>
      
    </>
    
  )
}

export default App