import imh from "/Images/HomeImg/giif.gif";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="hero w-full  bg-blue-50 md:p-20 p-10">
        <div className="hero  ">
          <div className="hero-content flex-col lg:flex-row space-x-10">
            <img src={imh} className="md:max-w-xl max-w rounded-lg " />
            <div>
              <h1 className="md:text-5xl text-3xl  font-semibold text-blue-950">Get <span className="text-blue-400">Free</span> Demo </h1>
              <p className="py-6">
                We Are Here Only For You So Get Demo And Learn How To Use It.
              </p>
             <button className="hover:text-blue-800 hover:bg-blue-200 btn btn-ghost bg-blue-400 text-white text-xl mr-2"> <Link to={"/user"}>Get Demo </Link></button>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
