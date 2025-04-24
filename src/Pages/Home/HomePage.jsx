import {useState, useEffect, useContext, useRef} from 'react'
//useState un estado || useEffect el ciclo de vida || useRef para hacer referencia a un elemento
import { ThemeContext} from '../../Context/themeContext'
import { Link} from 'react-router-dom'
import image from '../../img/image.png'


import CardGoku from '../../Components/CardGoku/CardGoku'
import Cargar from '../../Components/Cargar/Cargar'

import './HomePage.css'

const HomePage = () => {

  //variables o estados
  // arrays de los personajes
  const [personajes, setPersonajes] = useState([]);

  //¿tiene mas personajes?
  const [hasMore, setHasMore] = useState(true);

  //la pagina en la cual estamos
  //empieza con un cero pagina 0 - 10 personajes
  const [page, setPage] = useState(1);
                
  const {theme, setTheme} = useContext(ThemeContext);   // hook del tema

  //useRef
  //useRef sirve para hacer referencia a un elemento
  const elementRef = useRef(null);

  const handlePersonajes =  (cantidad) =>{
  fetch(`https://dragonball-api.com/api/characters?page=${cantidad}&limit=10`)
  .then(response => response.json())
  .then(data => {
    setTimeout(()=>{
      //cuando no tenga items lo vuelve false
      if(data.items.length === 0) setHasMore(false);
      else{
        //copia los personajes que ya tiene y le suma 20 mas
        //... todos 
        setPersonajes((personaje)=>[...personaje, ...data.items])
        setPage((page)=>page+1);
      }
      
    },50)
  })
};

 useEffect(()=>{
   const observer = new IntersectionObserver(onIntersection);
  if(observer && elementRef.current) observer.observe(elementRef.current)

  return () =>{
     if(observer) observer.disconnect();
  }
},[handlePersonajes]);

const onIntersection = async (entries) => {
  const firstEntry = entries[0];
  if(firstEntry.isIntersecting && hasMore) await handlePersonajes(page)
};

  return (
    <>
      <main id = {theme ? 'mainClaro' : 'mainOscuro'}>
        <header>
          <img src={image} alt="..." />
        </header>
        {/* <div id='tarjetas'> */}
          {personajes.map((personajes)=>(
            <Link to={`/details/${personajes.id}`} key={personajes.id}>
              <CardGoku  key={personajes.id} personaje={personajes} />
            </Link>
          ))}
        {/* </div> */}
        <div id='scroll'>
          {
          hasMore &&   <div ref={elementRef}> <Cargar /> </div> 
        }
        </div>
      </main>
    </>
  )
}

export default HomePage

