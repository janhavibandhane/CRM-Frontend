import { Outlet } from "react-router-dom";
import UserNav from "./Component/User/UserNav";
import React, { useState } from "react";
import Dashbord from "./Component/User/Dashbord";

function Layout() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      {/* User Navigation Bar */}
      <UserNav />
      <Dashbord />

      {/* Theme Toggle Button */}
      {/* <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleTheme}
          className="btn btn-primary"
        >
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>
      </div> */}

      {/* Routed Content */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
