import React,{ useState,useEffect } from 'react'
const Form =()=>{
    const [meme,setMeme]=useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/39t1o.jpg"
    })
const [allMeme,setAllMemes]=useState([])
useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes").then(res=>res.json())
    .then(result=>setAllMemes(result.data.memes))
      },[])
    function getMemeImage(event){
        const{name,value}=event.target
    const randomNumber=Math.floor(Math.random()*allMeme.length)
    const {url}=allMeme[randomNumber]
    setMeme((meme)=>{
        return {
... meme, randomImage:url,
          [name]:value
        }
    })
    }
    function handleChange(event){
        const{name,value}=event.target
        setMeme((meme)=>{
            return {
    ... meme,
              [name]:value
            }
        })
    }
   

    return (
        <div className='form-container'>
     <div className="input">
        <input type="text" className='input1' placeholder='enter top text'onChange={handleChange} name="topText" value={meme.topText}/>
        <input type="text" className='input2' placeholder='enter bottom text' onChange={handleChange} name="bottomText" value={meme.bottomText} />
     </div>
     <button className='submit' onClick={getMemeImage}> Get a new image</button>
     <div className="meme-image-container">
       <img src={meme.randomImage} alt="meme  of meme" className="meme-image" />
       <h2 className='meme-text-top'>{meme.topText}</h2>
       <h2 className='meme-text-bottom'>{meme.bottomText}</h2>
        </div>
        </div>
    )
}
export default Form