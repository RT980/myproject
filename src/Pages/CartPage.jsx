import { useContext } from "react";
import { CartContext } from "../Context/CartContext/CartProvider";
import { MdDelete } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import empty from "../assets/Cart/empty.webp"

function CartPage() {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(CartContext);
  console.log(state);

  const totalAmount = state.cartItems.reduce((acc, item) => {
    return acc + item.qty * item.caloriesPerServing

  }, 0)
  const totalItem = state.cartItems.reduce((acc, item) => {
    return acc + item.qty
  }, 0)
  console.log(totalAmount)


  return (
    <div>
      <div>
        {state.cartItems.length > 0 ? (
          <div className=" flex mt-[40px]">
            <div className="w-[900px]">
              {state.cartItems.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="    flex justify-evenly items-center m-5 h-56 rounded-2xl shadow-2xl shadow-black ">
                      <div className=" ">
                        <img className="h-40 rounded-2xl " src={item.image} alt="" />
                      </div>
                      <div className="  h-14  ">
                        <h1 className="text-[30px]">{item.name}</h1>
                      </div>
                      <div className="  h-14 space-y-2 ">
                        <h1 className=" text-red-500 text-[30px]">
                          Rs.{item.caloriesPerServing}
                        </h1>

                        <button
                          onClick={() => {
                            dispatch({
                              type: "RemoveItem",
                              payload: { id: item.id },
                            });
                          }}
                        >
                          <MdDelete color="red"className="pl-[20px] size-[50px]" />
                        </button>
                      </div>
                      <div className=" h-14 space-x-2 flex justify-center items-center ">

                        <button
                          className="hover:bg-orange-700 text-[30px] rounded-full bg-black text-white w-5 "
                          onClick={() => {
                            dispatch({
                              type: "Decreament",
                              payload: { id: item.id },
                            });
                          }}
                        >
                          -
                        </button>

                        <span className="text-[30px] ">{item.qty}</span>

                        <button
                          className="hover:bg-orange-700 text-[30px] rounded-full bg-black text-white w-5"
                          onClick={() => {
                            dispatch({
                              type: "Increament",
                              payload: { id: item.id },
                            });
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="  rounded-2xl w-96 m-5 shadow-2xl shadow-gray-400 h-72 flex flex-col justify-center items-center gap-y-4 border border-gray-500  ">
              <h1
                className="text-3xl font-bold">Order Summary
              </h1>
              {/* <h1>Subtotal (0 items)
              </h1> */}
              <h1 className="text-[20px]">Total {totalAmount}</h1>
              <button
                onClick={() => {
                  navigate("/payment", { state: { totalAmount: totalAmount, totalItem: totalItem } })
                }}
                className="bg-black p-3 text-white rounded-[5px] hover:bg-gray-800"  >
                Procced to CheckOut ({totalItem})
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "ClearCart" })
                }}
                className="bg-orange-600 p-3 text-white rounded-[5px]"  >
                Clear Cart
              </button>
            </div>
          </div>
        ) : (
          <div className=" w-96 h-60 m-auto mt-16 flex flex-col justify-center items-center">

            <img className=" w-[400px]" src={empty} alt="" />

            <p className="font-mono">
              Item Not Found On Cart 
                  <NavLink to={"/menu"} className="underline  text-red-600 p-2">
                   Shop Now
              </NavLink>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
