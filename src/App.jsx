import { Route, Routes } from 'react-router-dom'
import './App.css'
import './bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Landing from './pages/Landing'
import RecipeDetails from './pages/RecipeDetails'
import EditRecipe from './components/EditRecipe'





function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/edit-recipe/:id" element={<EditRecipe />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
