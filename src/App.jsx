import React from 'react'
import About from './Pages/About'
import Allergy from './Pages/Allergy'
import CartPage from './Pages/CartPage'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import ProductDescription from './Pages/ProductDescription'
import Service from './Pages/Service'
import { Route, Routes } from 'react-router-dom'
import Navigation from './NavBar/Navigation'
import Payment from './Pages/Payment'
import Success from './Payment/Success'
import Failure from './Payment/Failure'
import Login from './Auth/Login'
import Profile from './Pages/Profile'


function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/allergy' element={<Allergy/>}/>
        <Route path='/cartpage' element={<CartPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path="/productDescription/:id" element={<ProductDescription />} />
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/failure' element={<Failure/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      
    </div>
  )
}

export default App
