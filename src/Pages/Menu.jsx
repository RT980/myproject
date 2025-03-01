import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import qr from "../assets/Allergy/qr.png";
import { FaMobileScreenButton } from "react-icons/fa6";

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
        <h1 className="text-[50px] font-bold text-orange-500 flex justify-center gap-4 underline">
        Our 
        <span className="text-black">Menu</span>
        </h1>
        <div className="flex p-[30px] flex-wrap gap-8 justify-center">
      {product.length > 0 ? (
        <div className="border-2 border-red-500  flex flex-wrap justify-center gap-5 px-20 py-5">
          {product.map((item) => {
            return (
              <div
                key={item.name}
                className="flex justify-center flex-col shadow-gray-800 shadow-2xl rounded-2xl p-1 h-48 w-48 items-center"
              >
                <NavLink key={item.name} to={`/productDescription/${item.id}`}>
                  <img className="h-28 rounded-2xl" src={item.image} alt="" />
                  <h1>{item.name}</h1>
                  <h1>Rs.{item.caloriesPerServing}</h1>
                </NavLink>
              </div>
            );
          })}
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
