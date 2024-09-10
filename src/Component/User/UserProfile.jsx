function UserProfile() {
    const inputStyle = {
        border: "none",
        borderBottom: "2px solid #002147",
        outline: "none",
        padding: "8px 0",
        width: "100%",
      };
  return (
    <>
      <div className=" w-full flex justify-center items-center flex-col">

          {/* profile */}
          <div className="avatar flex justify-center mt-20">
             <div className="w-24 rounded-full">
                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
          </div>

          <div className=" w-[60%]  mt-10">
              <div className="card bg-blue-200 rounded-box md:h-[25rem] h-[35rem] flex md:flex-row flex-col justify-evenly p-5  md:text-xl text-lg">
                <div className=" space-y-5 pt-10">
                    <div>
                    <p className="font-semibold">Full Name</p>
                    <input style={inputStyle} 
                    className="bg-blue-200"
                    />
                    </div>

                    <div>
                    <p className="font-semibold">User Name</p>
                    <input style={inputStyle} 
                    className="bg-blue-200"
                    />
                    </div>

                    <div>
                    <p className="font-semibold">Gender</p>
                    <input style={inputStyle} 
                    className="bg-blue-200"
                    />
                    </div>
                </div>
                <div className=" pt-10">

                     <div>
                       <p className="font-semibold">Gender</p>
                       <input style={inputStyle} 
                       className="bg-blue-200"
                        />
                     </div>
                     <div>
                       <p className="font-semibold">Country</p>
                       <input style={inputStyle} 
                       className="bg-blue-200"
                        />
                     </div>

                </div>
              </div>
        </div>

      </div>
    </>
  );
}
export default UserProfile;
