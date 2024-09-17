function UserAddSingleLead() {
  return (
    <>
<div className=" w-[20rem] h-[10rem] space-y-2 ml-2">

      <label className="input input-bordered flex items-center gap-2">
        Name
        <input type="text" className="grow" placeholder="Daisy" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Email
        <input type="text" className="grow" placeholder="daisy@site.com" />
      </label>
      <div className=" flex justify-center items-center">      
        <button className="btn bg-gray-400 m-1 grow">Submit</button>
      </div>

</div>
    </>
  );
}
export default UserAddSingleLead;
