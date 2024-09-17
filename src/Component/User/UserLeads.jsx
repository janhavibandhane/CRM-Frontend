import { useState } from "react";
import UserAddSingleLead from "./UserAddSingleLead";

function UserLeads(){
  const[isClick,SetIsClick]=useState(false);

  function AddLead(){
    SetIsClick(true);
  }


    return(
        <>
<div className="overflow-x-auto">
  <div className="m-2" onClick={AddLead}><button className="btn btn-primary">Add Single Lead</button></div>
  {isClick && <UserAddSingleLead />}

  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
        </>
    )
}
export default UserLeads;