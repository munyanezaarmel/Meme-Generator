import React from 'react'
import body from '../images/body.png';
import data from '../data';
const Form =()=>{
    function getMemeImage(){
     console.log(data)

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