import React from 'react'
import memesData from '../memesData.js';
import { useState } from 'react';
const Form =()=>{
    const [meme,setMeme]=useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/39t1o.jpg"
    })
const [allMemeImage,setAllMemeImage]=useState(memesData)
    function getMemeImage(){
    const memesArray=memesData.data.memes
    const randomNumber=Math.floor(Math.random()*memesArray.length)
    const {url}=memesArray[randomNumber]
    setMeme((meme)=>{
        return {
... meme, randomImage:url
        }
    })
    }
    return (
        <div className='form-container'>
     <div className="input">
        <input type="text" className='input1' placeholder='enter top text' />
        <input type="text" className='input2' placeholder='enter bottom text' />
     </div>
     <button className='submit' onClick={getMemeImage}> Get a new image</button>
     <div className="meme-image-container">
       <img src={meme.randomImage} alt="meme  of meme" className="meme-image" />
        </div>
        </div>
    )
}
export default Form