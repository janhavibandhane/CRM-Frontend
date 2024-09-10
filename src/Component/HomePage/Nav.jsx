import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
   
      <div className=" bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 navbar w-full ">
        <div className="flex-1">
          <a className="text-xl">daisyUI</a>
        </div>

        <div className=" text-blue-800 btn btn-ghost hover:bg-blue-400 hover:text-white text-xl mr-2">
                <Link to={"/login"}>
                  Login  
                </Link>
       </div>
       <div className=" hover:text-blue-800 hover:bg-white btn  btn-ghost bg-blue-400 text-white text-xl ">
               <Link to={"/signin"}>
                Sign in 
                </Link>
       </div>
      </div>
      
    </>
  );
}
export default Nav;
