import {useEffect, useState} from 'react';
import CardMui from '../../Components/CardMui/CardMui';
import React from 'react'

const HomePage = () => {
  return (
    <>
        <main>
        {characters.map((character)=>{
            return (<CardMui key={character.id} character={character}/>)
        })}
      </main>
    </>
  )
}

export default HomePage