import { Outlet } from "react-router-dom";
import UserNav from "./Component/User/UserNav";
import Dashbord from "./Component/User/Dashbord";
function Layout(){
    return(
        <>
        <UserNav />
        <Dashbord />
        <Outlet />
        
        </>
    )
}
export default Layout;