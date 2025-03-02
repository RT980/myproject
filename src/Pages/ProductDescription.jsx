import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext/CartProvider";
import { FcRating } from "react-icons/fc";
function ProductDescription() {

const {dispatch}=useContext(CartContext)
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const getSingleData = async () => {
    try {
      let response = await fetch(`https://dummyjson.com/recipes/${id}`);
      response = await response.json();
      // console.log(response);
      setProduct(response);
      setIngredients(response.ingredients);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSingleData();
  }, [id]);
  return (
    <div>
      {product ? (
        <div>
          <div className="">
            <h1 className="text-3xl mb-8 md:text-4xl flex gap-2 justify-center font-semibold mt-4 text-orange-500">{product.name}</h1>
          <div className="mt-[50px] flex justify-center ">
            <div className="  mr-16 ">
              <img className="h-[400px] rounded-[20px] border border-gray-400 shadow-2xl shadow-gray-600" src={product.image} alt="" />
            </div>
           
            <div className=" flex  justify-around p-5  flex-col items-center ">
              
              <h1 className="text-[40px] flex justify-center mt-[40px] text-black">{product.name}</h1>
              <p className="flex flex-col justify-center items-center text-[25px]"> Cuisine: {product.cuisine}</p>
              <p className=" flex flex-col justify-center items-center text-[25px]">Rating : {product.rating }</p>
              <p className="text-[25px] text-red-500">Rs.{product.caloriesPerServing}</p>
              
              <div>
                <button>-</button>
                <span>{12}</span>
                <button>+</button>
              </div>
             
              <div>
                <button className="bg-sky-600   p-3 m-2 text-white hover:bg-sky-700 rounded-[6px]">
                  Buy Now{" "}
                </button>
                <button

                onClick={()=>{
                  dispatch({type:"AddToCart",payload:product})
                }}
                
                
                className="  bg-orange-600 p-3  m-2  text-white hover:bg-amber-700 rounded-[6px]">
                  Add To Cart{" "}
                </button>
              </div>
              </div>
              <div></div>
            </div>
          </div>

                <div className="mt-10 ml-[200px]">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="flex justify-center gap-52 mt-[60px]"  >
            <div >
              <h1 className="text-2xl font-bold mb-2 ">Ingredients:</h1>
              <div className="space-y-4">
                {ingredients.length > 0 && (
                  <div className=" flex flex-col font-semibold ">
                    {ingredients.map((item, index) => {
                      return <div key={index}>{item}</div>;
                    })}
                  </div>
                )}
              </div>
            </div>

            <div >
              <h1 className="text-2xl font-bold m-2">Instructions :</h1>
              <div className="flex flex-col gap-2">
                <p className="text-[17px] flex gap-1">
                  <span className="font-semibold">Preparation Time :</span>
                  15
                  min
                </p>
                <p className="text-[17px] flex gap-1">
                  <span className="font-semibold">Cooking Time :</span>
                  20
                  min
                </p>
                <p className="text-[17px] flex gap-1">
                  <span className="font-semibold">Difficulty : </span>
                  Medium
                </p>
                <p className="text-[17px] ">
                  <span className="font-semibold mr-1">Preparation :</span>
                  In a wok, heat sesame oil over medium-high heat. Add minced ginger and garlic, sauté until fragrant. Add cubed tofu and stir-fry until golden brown. Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp. Pour soy sauce over the stir-fry and toss to combine. Serve over cooked rice.
                </p>
                  </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
    
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ProductDescription;