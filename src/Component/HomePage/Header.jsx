import imh from "/Images/HomeImg/giif.gif";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="hero w-full bg-blue-50 md:px-20 px-6 py-12 flex justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
          <img
            src={imh}
            alt="Demo GIF"
            className="md:max-w-xl max-w  rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950">
              Get <span className="text-blue-500">Free</span> Demo
            </h1>
            <p className="mt-4 mb-6 text-lg text-gray-600">
              We are here only for you! Get a demo and learn how to use it.
            </p>
            <Link to="/user">
              <button className="btn px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition duration-300">
                Get Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
