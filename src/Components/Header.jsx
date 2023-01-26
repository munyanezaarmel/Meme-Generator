import header from '../images/header.png';
import '../index.css'
export default function Header(){
    return (
        <div>
      <header className='header'>
        <img src={header} alt="image header" className='image-header'/>
        <h2>Meme Generator</h2>
        <h4 className='react-course'>React course-project 3</h4>
      </header>
      </div>
    )
}