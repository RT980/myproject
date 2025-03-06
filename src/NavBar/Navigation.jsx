
import { NavLink } from 'react-router-dom'
import image from "../assets/Image/image.png"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext/CartProvider"
import { CgProfile } from "react-icons/cg";

function Navigation() {
  const {state,dispatch}=useContext(CartContext)

  console.log(state)
  const totalCartItems = state.cartItems.reduce((acc,item)=>{
    return acc+item.qty;
  },0)
  console.log(totalCartItems)
  return (
    <div className='flex flex-row justify-around item-center bg-white shadow-2xs shadow-gray-300'>
      <NavLink to={'/'} className="flex flex-row items-center gap-3 text-[#0C6967] text-[26px] font-bold">
      <img src={image} alt=""  className='h-[45px]'/>
      </NavLink>
      <div className='flex flex-row item-center gap-6 text-[20px] m-5  '>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/menu'}>Our Menu</NavLink>
      <NavLink to={'/service'}>Our Service</NavLink>
      <NavLink to={'/allergy'}>Allergy Advice</NavLink>
      
      <NavLink to="/cartPage" className=" text-gray-500"> <span className='absolute ml-[20px] top-[5px] z-50 text-white border w-[25px] flex justify-center bg-red-500 rounded-[50px]'>{totalCartItems}</span><BsCart4 size={35}  /></NavLink>
      </div>

    
    <div className='flex space-x-[20px] mt-[8px] justify-center items-center'>
    <NavLink to="https://www.facebook.com/login.php/" target="_blank"><FaFacebook size={30} className='hover:text-blue-500'/></NavLink>
      <NavLink to="https://www.tiktok.com/" target="_blank"><AiFillTikTok size={35} className='hover:text-black'/></NavLink>
      <NavLink to="https://www.instagram.com/" target="_blank"><FaSquareInstagram size={30} className='hover:text-red-500'/></NavLink>
      <NavLink to="/contact" className="border h-[40px] w-[120px] rounded-[50px] bg-orange-500 hover:bg-orange-800 text-white pl-4 pt-2">Contact Us</NavLink>
      <NavLink to="/login" className="border h-[40px] w-[120px] rounded-[50px] bg-blue-500 hover:bg-blue-800 text-white pl-10 pt-2">Login</NavLink>
      <NavLink to="/profile"><CgProfile  size={30}/></NavLink>
      </div>
    </div>
  )
}

export default Navigation
