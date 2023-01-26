import './index.css'
import Header from "./Components/Header"
import Form from './Components/Form'
import Body from './Components/Body'
 const App=()=>{
    return(
        <div className='container'>
       <Header/>
       <Form />
       <Body/>
        </div>
    )
}
export default App