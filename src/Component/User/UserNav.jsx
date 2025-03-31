import { IoSettings } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
function UserNav() {
  return (
    <>
      <div className=" w-full ">
        <div className="navbar bg-[#002147] text-white">

            {/* logo */}
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>

          {/* other options */}
          {/* 1st */}
          <div className=" md:space-x-5 space-x-2 md:mr-5 mr-2">
          {/* <IoSettings  className=" md:text-3xl text-xl"/> */}
           <Link to={"/"}><MdLogout className=" md:text-3xl text-xl "/>
           </Link>
          </div>
          {/* Profile */}
          <div className="flex-none gap-2 text-black">

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"profile"}>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                  </Link>
                </li>
                
                <Link to={"/"}>
                <li>
                  <a>Logout</a>
                </li>
                </Link>
              </ul>


            </div>
          </div>
          {/* other options end here */}
        </div>
      </div>
    </>
  );
}
export default UserNav;
