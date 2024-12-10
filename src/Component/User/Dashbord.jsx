import { CiHome } from "react-icons/ci";
import { Link } from "react-router-dom";
function Dashbord() {
  return (
    <>
<div className="drawer lg:drawer-open inline-block  ">
 <div className="navbar bg-green-400">

  {/* Mobile view */}
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>Home</a></li>
          <li><Link to={"meeting"}>Meeting</Link></li>
          <li><Link to={"UserLeads"}>Leades</Link></li>
          <li><Link to={"Calender"}>Calender</Link></li>
      </ul>
    </div>
   
  </div>

  {/* Laptop view */}
  <div className="">
    <ul className="lg:menu lg:flex lg:flex-row lg:ml-[-17rem] lg:space-x-20 lg:text-lg hidden">
      <li><a>Home</a></li>
      <li><Link to={"meeting"}>Meeting</Link></li>
      <li><Link to={"UserLeads"}>Leades</Link></li>
      <li><Link to={"Calender"}>Calender</Link></li>
      <li><a>Leads</a></li>
    </ul>
  </div>

</div>


      </div>
    </>
  );
}
export default Dashbord;