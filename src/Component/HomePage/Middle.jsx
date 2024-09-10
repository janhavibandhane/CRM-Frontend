import imh from "/Images/HomeImg/image.png";
function Middle() {
  return (
    <>
      <div className="hero w-full  bg-blue-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={imh}
            className="md:max-w-2xl max-w rounded-lg "
          />
          <div>
            <h1 className="md:text-5xl text-3xl  font-semibold text-blue-950 text-center md:text-start">Give Your Coustmers The <span className=" text-blue-400">Support</span> They Deserve</h1>
            <p className="py-6 text-blue-950 text-lg text-center md:text-start">
              Make coustmer happy and scale coustmer service without increasing units cost. 
            </p>
            <div className=" ml-0 lg:ml-[-9.3rem]  mt-4 justify-center flex">
               <div className="radial-progress text-blue-500 " style={{ "--value": 70 }} role="progressbar">
                 70%
              </div>
              <div className=" mt-5 ml-4 text-lg text-blue-500 ">
                Reduse your team's<br /> work load by up to..
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
export default Middle;
