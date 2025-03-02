import  { createContext, useReducer, useState } from 'react'
export const CartContext= createContext()
import { toast,Bounce } from 'react-toastify'

let initialState={
    cartItems:[]
}


let cartReducer =(state,action)=>{

    switch (action.type){
        case "AddToCart":{
            const isExisting = state.cartItems.find((item)=>{
                return item.id === action.payload.id;
            })
            if(isExisting){
                return state;
            }else{
                const newProduct={...action.payload,qty:1};
                console.log(newProduct);

                let newCartItem=[...state.cartItems,newProduct]
                console.log(newCartItem)
                toast.success(`${action.payload.name} is added to cart`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    });

                return{
                    ...state,
                    cartItems:newCartItem
                }
            }

           
        }
        case "RemoveItem": {
            const filterCartItem = state.cartItems.filter((item) => {
              return item.id !== action.payload.id;
            });
      
            return {
              ...state,
              cartItems: filterCartItem,
     };
    }
        case "Increament":{

            const newCartItem = state.cartItems.map((item)=>{
                return item.id ===action.payload.id 
                ? {...item,qty:item.qty+1}
                :item;
            });
            return{
                cartItems:newCartItem,
            }
            
        }
        case "Decreament":{
            const newCartItem = state.cartItems.map((item)=>{
                return item.id ===action.payload.id  && item.qty>1
                ? {...item,qty:item.qty-1}
                :item;
            });
            return{
                cartItems:newCartItem,
            }
            
          

        }
        case "ClearCart":{
            return {
               cartItems:[],
            }
            
           
        }
        default:{
            return state;
        }
    }
    
}

export const CartProvider=({children})=>{

    const [state,dispatch]= useReducer(cartReducer,initialState)

    console.log(state)
    return <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
}

