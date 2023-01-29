import React from 'react'
import body from '../images/body.png';
import memesData from '../memesData.js';
const Form =()=>{
    function getMemeImage(){
    const memeData=memesData.data.memes
    const randomNumber=Math.floor(Math.random()*memeData.length)
    const {url}=memeData[randomNumber]
    console.log(url)

    }
    return (
        <div className='form-container'>
     <div className="input">
        <input type="text" className='input1' placeholder='enter top text' />
        <input type="text" className='input2' placeholder='enter bottom text' />
     </div>
     <button className='submit' onClick={getMemeImage()}> Get a new image</button>
     <div className="meme-image-container">
       <img src={body} alt="meme  of meme" className="meme-image" />
        </div>
        </div>
    )
}
export default Form