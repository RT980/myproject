import React from 'react'
import { NavLink } from 'react-router-dom'
import momo from "../assets/Image/momo.png"
import ellips from "../assets/Image/ellips.png"
import man from "../assets/Image/man.png"
import { useState, useEffect } from "react";
function Home() {
  const [product, setProduct] = useState([]);
  const [filterItems, setFilterItems] = useState([])
  const getData = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setProduct(response.recipes);
    filterProduct("American")
  };

  const filterProduct = (countary) => {
    const products = product.filter((item) => {
      return item.cuisine === countary;
    })
    setFilterItems(products);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
        <div className='h-[650px]'>
          <div className='ml-[100px] mt-[100px] space-y-2'>
            <h1 className='text-gray-500 space-x-2 traking-[2px]'>RESTAURANT </h1>
              <p className='font-bold text-[50px]'>The
                <span className='bg-[url(assets\Image\one.png)] bg-center bg-cover '> #One </span>
              </p>
              <p className='font-bold text-[50px]'>Momo
                <span className='text-orange-600 '> Resturant</span>
              </p>
              <h1 className='font-bold text-[20px]'>More then
                <span className='text-orange-600'> 20+ Varieties </span>
                  of momo avilable for you
              </h1>
              <NavLink to={`/menu`}>
              <button className="flex justify-center items-center h-[55px] w-[220px] rounded-[50px] bg-teal-900 text-white hover:bg-teal-950 mt-[40px]">
              Explore food menu
              </button>
              </NavLink>
          </div>
          <div className='flex'>
          <div>
          <img src={ellips}alt="" className='h-[700px] absolute right-0 top-0 -z-50' />
            </div>
            <div>
              <img src={momo} alt="" className='h-[400px] absolute right-[30px] top-[150px]'/>
            </div>
          </div>
        </div>

        <div className='ml-[110px] h-[500px] flex justify-between'>
          <div className='w-[360px] h-[415px] bg-teal-900 flex justify-center rounded-t-[300px]'>
            <img src={man} alt="" className='h-[486px] absolute top-[754px]'/>
          </div>
          <div className='w-[500px] mr-[100px]'>
            <h1 className='font-bold text-[35px]'>
              Why Customer 
              <span className='text-orange-600'> Love Us </span>
            </h1>
            <p className='mt-[20px] text-gray-500'>
            We bring you the perfect blend of authentic flavors, fresh ingredients, and warm hospitality.
             Our handcrafted momos, rich with traditional spices and fillings, keep customers coming back for more.
              Whether you crave classic steamed momos, crispy fried delights, or flavorful dumpling soups, we serve every dish with care and passion. 
              With a cozy ambiance, friendly service, and a menu full of mouthwatering options, we create a dining experience that feels like home.
              Come taste the love in every bite!
            </p>
            <button className='flex justify-center items-center h-[55px] w-[220px] rounded-[50px] bg-teal-900 text-white hover:bg-teal-950 mt-[40px]'>Explore Our Story </button>
          </div>
        </div>

        <div className='ml-[110px] mt-[50px] h-[400px]'>
          <div className='flex flex-col justify-center items-center '>
            <h1 className='text-[39px] font-bold'>
              Our 
              <span className='text-orange-500'> Most Popular </span>
              Recipies
            </h1>
            <p className='text-[20px]'>
            Browse through a varieties of recipes with fresh ingredients selected only from the best places
            </p>
          </div>
          <div className="  m-5  p-5  "  >
        <div className="flex  justify-center gap-4"  >
          <button

            onClick={() => {
              filterProduct("American")
            }}

            className="border-1 border-black  rounded-4xl p-1"    >American</button>
          <button
            onClick={() => {
              filterProduct("Italian")
            }}
            className="border-1 border-black  rounded-4xl p-1"   >Italian</button>
          <button
            onClick={() => {
              filterProduct("Asian")
            }}
            className="border-1 border-black  rounded-4xl p-1"   >Asian</button>


           <button
            onClick={() => {
              filterProduct("Mexican")
            }}
            className="border-1 border-black  rounded-4xl p-1"   >Mexican</button>

          <button
            onClick={() => {
              filterProduct("Pakistani")
            }}
            className="border-1 border-black  rounded-4xl p-1"   >Pakistani</button>

          <button
            onClick={() => {
              filterProduct("Japanese")
            }}
            className="border-1 border-black  rounded-4xl p-1"   >Japanese</button>

        </div>
        
      </div>

      <div>
        {filterItems.length>0?(
          <div className=" flex flex-wrap justify-center">
            {filterItems.map((item)=>{
              return (
                <div key={item.id} className="shadow-2xl shadow-gray-700 py-3 rounded-2xl flex flex-col justify-center items-center m-5 w-80">
                  <img src={item.image} alt="" className="h-32" />
                  <h1>Cuisine type: {item.cuisine}</h1>
                  <h1>Name:{item.name}</h1>
                </div>
              )
            })}
          </div>
        ):(
          <div>Loading....</div>
        )}
      </div>
        </div>
      </div>

  )
}

export default Home
