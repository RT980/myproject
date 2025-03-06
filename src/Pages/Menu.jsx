import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import qr from "../assets/Allergy/qr.png";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
function Menu() {
  const [product, setProduct] = useState([]);
  const getData = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setProduct(response.recipes);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="mt-[30px]">
        <h1 className="text-[56px] font-Parisienne text-teal-700 flex justify-center">
        Our Menu
        </h1>
        <p className="text-[31px] text-orange-600 flex flex-col items-center font-bold">
        Our menu is more than just momos,
        <span className="text-black"> with a variety of dishes to cater to all tastes and preferences.</span>
        </p>
        <div className="flex justify-center">
          <div className="h-[442px] w-[1100px] bg-gray-100 mt-15 rounded-[16px] flex flex-col justify-center items-center">
            <h1 className="text-[31px] text-teal-700">
            Scan the QR code
            </h1>
            <p className="text-gray-500">You can also check the allergy advices using your phone as well</p>
            <div className="mt-[40px]">
              <img src={qr} alt="" className="h-[168px] w-[168px]"/>
              <h1 className="flex text-orange-600 text-[30px] font-bold">SCAN 
                <span className="text-black flex items-center"> ME! <FaMobileScreenButton/></span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    <div>
      <div className="mt-[40px]">
        <h1 className="text-[50px] font-bold text-orange-500 flex justify-center gap-4 ">
        Our 
        <span className="text-black">Menu</span>
        </h1>
        <div className="flex p-[30px] flex-wrap gap-8 justify-center">
      {product.length > 0 ? (
        <div className=" flex flex-wrap justify-center gap-5 px-20 py-5">
          <div className="flex p-[30px] flex-wrap gap-8 justify-center">
          {product.map((item) => {
            return (
              <div
                key={item.name}
                className="border border-gray-400 h-[420px] w-[340px] flex flex-col justify-center items-center shadow-2xl shadow-gray-700 rounded-[20px]"
              >
                <NavLink key={item.name} to={`/productDescription/${item.id}`}>
                  <img className="h-[240px] rounded-2xl " src={item.image} alt="" />
                  <h1 className="mt-[20px] font-bold flex flex-col items-center">{item.name}</h1>
                  <h1 className="flex justify-center items-center">
                  <span className="flex items-center gap-2">  Rating:  4.6 <FcRating className="h-[20px] w-[20px]"/></span>
                  </h1>
                  <h1 className="text-red-600 flex flex-col items-center">Rs.{item.caloriesPerServing}</h1>

                  <button className="mt-[10px] h-[50px] w-[150px] rounded-[50px] bg-orange-500 text-white hover:bg-amber-700  ml-[50px]">
                  View More
                  </button>
                </NavLink>
              </div>
              
            );
          })}
        </div>
        </div>
        
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
        
      )}
      
      </div>
      
      </div>
    </div>
    </div>
  );
}

export default Menu;
