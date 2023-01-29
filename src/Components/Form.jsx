import React from 'react'
import memesData from '../memesData.js';
import { useState } from 'react';
const Form =()=>{
    const[memeImage,setMemeImage]=useState("")

    function getMemeImage(){
    const memeData=memesData.data.memes
    const randomNumber=Math.floor(Math.random()*memeData.length)
    const url=memeData[randomNumber].url
    setMemeImage(url)

    }
    return (
        <div className='form-container'>
     <div className="input">
        <input type="text" className='input1' placeholder='enter top text' />
        <input type="text" className='input2' placeholder='enter bottom text' />
     </div>
     <button className='submit' onClick={getMemeImage}> Get a new image</button>
     <div className="meme-image-container">
       <img src={memeImage} alt="meme  of meme" className="meme-image" />
        </div>
        </div>
    )
}
export default Form