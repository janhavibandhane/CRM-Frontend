import carousel1 from "/Images/HomeImg/demo.png"
import carousel2 from "/Images/HomeImg/demo2.png"


function Middle2() {
  return (
    <>
      <div className="hero w-full  bg-blue-50 flex justify-center items-center flex-col pt-10 pb-20">
      <h1 className="md:text-5xl text-3xl text-blue-950 text-center mb-2 font-bold">Services We Are Provied To Our <span className=" text-blue-400">Coustmers</span></h1>
        <div className="carousel carousel-center rounded-box md:w-[60%] w-[70%] md:h-full h-[20rem] shadow-lg  bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500">
        <div className="carousel carousel-center rounded-box">
  <div className="carousel-item">
    <img src={carousel1} alt="Pizza" className=" lg:w-[30rem] w-[23rem] m-1" />
  </div>
  <div className="carousel-item">
    <img
      src={carousel2} className=" lg:w-[34rem] w-[28rem] m-1"
      alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Pizza" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      alt="Pizza" />
  </div>
</div>
        </div>
      </div>
    </>
  );
}
export default Middle2;
