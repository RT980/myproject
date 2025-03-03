
import { NavLink } from 'react-router-dom'
import image from "../assets/Image/image.png"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext/CartProvider"

function Navigation() {
  const { state } = useContext(CartContext);

  const totalCartItem = state.cartItem.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
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
      <NavLink to="/cartPage"> <span>{totalCartItem}</span><AiOutlineShoppingCart size={25}  /></NavLink>
      {/* <NavLink to="/cartPage"><AiOutlineShoppingCart size={30}  /></NavLink> */}
      </div>

    
    <div className='flex flex-row item-center gap-3 font-bold m-5'>
    <NavLink to="https://www.facebook.com/login.php/" target="_blank"><FaFacebook size={35}/></NavLink>
      <NavLink to="https://www.tiktok.com/" target="_blank"><AiFillTikTok size={35}/></NavLink>
      <NavLink to="https://www.instagram.com/" target="_blank"><FaSquareInstagram size={35}/></NavLink>
      <NavLink to="/contact" className="bg-[#D95103] text-white rounded-3xl pl-2 pr-2  text-2xl">Contact Us</NavLink>
      </div>
    </div>
  )
}

export default Navigation
