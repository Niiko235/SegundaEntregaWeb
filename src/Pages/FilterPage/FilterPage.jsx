import React, {useState, useEffect, useContext, useRef} from 'react'
import { useParams, Link} from 'react-router-dom'
import { ThemeContext } from '../../Context/themeContext'

import CardGoku from '../../Components/CardGoku/CardGoku'
import Cargar from '../../Components/Cargar/Cargar'

import male from '../../img/image2.png'
import female from '../../img/image3.png'


import './FilterPage.css'


const FilterPage = () => {

  const {gender} = useParams(); 
  const {theme, setTheme} = useContext(ThemeContext);   // hook del tema

  //variables o estados
  // arrays de los personajes
  const [personajes, setPersonajes] = useState([]);

  //¿tiene mas personajes?
  const [hasMore, setHasMore] = useState(true);
 
  //la pagina en la cual estamos
  //empieza con un cero pagina 0 - 10 personajes
  const [page, setPage] = useState(1);
  
  //useRef
  //useRef sirve para hacer referencia a un elemento
  const elementRef = useRef(null);

  //intento
  const [intento, setIntento] = useState([]);
  
    const handlePersonajes =  (cantidad) =>{
      
      fetch(`https://dragonball-api.com/api/characters?page=${cantidad}&limit=10`)

      .then(response => response.json())
      .then(data => {

        setTimeout(()=>{
          //cuando no tenga items lo vuelve false
          if(data.items.length === 0) {
            
            setHasMore(false);
          }
          else{
            
            //... todos 
            const filtrados = data.items.filter((personaje) => personaje.gender === gender);
            const copia = [...intento, ...filtrados];

            if(copia.length >=10){
              const guardar = copia.slice(0,10);
              const sobrar = copia.slice(10);
              
              setPersonajes((personajes) => [...personajes, ...guardar]);
              setIntento(sobrar);
              setPage((page)=>page+1);
            }else if(copia.length< 10 && gender==="Female"){
              setPersonajes((personajes) => [...personajes, ...copia]);
              setPage((page)=>page+1);
            }else{
              setIntento(copia);
              setPage((page)=>page+1);
            }
          }
          
        },50);

      })
      .catch(console.log("Error de carga en los datos de la API en la pagina Filter"));


    };

    useEffect(() => {
      // Reiniciar estado cuando cambia el género
      setPersonajes([]);
      setPage(1);
      setHasMore(true);
      setIntento([]);
      
    }, [gender]);
    
    useEffect(()=>{
      const observer = new IntersectionObserver(onIntersection);
        if(observer && elementRef.current) {
          observer.observe(elementRef.current);
        }
    
        return () =>{
          if(observer) observer.disconnect();
        }
    },[handlePersonajes,gender]);
    
    const onIntersection = async (entries) => {
      const firstEntry = entries[0];
      if(firstEntry.isIntersecting && hasMore) await handlePersonajes(page)
    };
    
  return (
    <>
      <main id = {theme ? 'mainClaro' : 'mainOscuro'}>
      <header>
        <img src={(gender==="Male")? male : female} alt="..." />
      </header>
      <div id='tarjetas'>
          {personajes.map((personajes)=>(
            <Link to={`/details/${personajes.id}`} key={personajes.id}>
              <CardGoku   key={personajes.id} personaje={personajes} />
            </Link>
          ))}
      </div>
        <div id='scroll'>
          {
          hasMore &&   <div ref={elementRef}> <Cargar /> </div> 
        }
        </div>
      </main>
    </>
  )
}

export default FilterPage
