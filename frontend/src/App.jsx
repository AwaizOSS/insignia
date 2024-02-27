import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Destinations from './components/Destinations'
import MyAccount from './components/MyAccount'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destinations' element={<Destinations/>}/>
        <Route path='/myAccount' element={<MyAccount/>}/>
      </Routes>
    </BrowserRouter>
      
  )
}

export default App
