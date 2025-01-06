import './App.css'
import Homepage from './components/Homepage/Homepage'
import About from './components/About/About'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route element={<Homepage/>} path='/' />
            <Route element={<About/>} path='/about'/>
          </Routes>
        </BrowserRouter>
        
      

    </>
  )
}

export default App