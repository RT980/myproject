import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
    const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <form  className="shadow-2xl  space-y-3  shadow-black w-[500px] 
       m-auto  mt-20 rounded-2xl p-5 flex    pl-20  flex-col"  >
        <label htmlFor="Email">Password</label>
        <input type="Email"  className="  p-2 rounded-2xl  outline-none  border-2 border-black   w-72"  placeholder="Enter Your Email" />
        <label htmlFor="password">Password</label>
        <input type="password" className="  p-2 rounded-2xl outline-none border-black border-2   w-72"  id="" placeholder="Enter Your Password" />
        <button   className="bg-black  text-white p-2 rounded-2xl   w-72"   >Login</button>
        <button
        
        onClick={()=>{
            loginWithRedirect();
          }}
        
        className="border-1 border-black  flex  justify-center items-center gap-2 text-blue-600-300 p-2 rounded-2xl   w-72"  >  <FcGoogle size={30} />  Login With Google</button>
      </form>
    </div>
  );
}

export default Login;