import React from 'react'
import Smile from '../Components/Icons/Smiles';
import Post from '../Components/Bottons/Post';
import Style from '../Styles/Main.module.css';

export default function BoxComment() {
  return (
    <React.Fragment>
    <section className={Style.boxComment}>
      <div >
      <Smile></Smile>
      <input  placeholder='Agrega un comentario...'></input>
      </div>
      <Post></Post>
    </section>
    </React.Fragment>
  )
}
