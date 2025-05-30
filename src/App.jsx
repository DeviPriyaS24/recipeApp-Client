import { Route, Routes } from 'react-router-dom'
import './App.css'
import './bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Landing from './pages/Landing'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
