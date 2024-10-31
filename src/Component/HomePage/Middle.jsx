import imh from "/Images/HomeImg/image.png";

function Middle() {
  return (
    <>
      <div className="hero w-full bg-blue-50 py-16 flex justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse items-center lg:space-x-8 px-6 lg:px-0">

          {/* img */}
          <img
            src={imh}
            alt="Customer Support"
            className="md:max-w-xl max-w  rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
          {/* Content */}
          <div className="text-center lg:text-left lg:max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950">
              Give Your Customers The <span className="text-blue-500">Support</span> They Deserve
            </h1>
            <p className="py-6 text-blue-900 text-lg">
              Make customers happy and scale customer service without increasing unit costs.
            </p>
            <div className="flex items-center justify-center lg:justify-start mt-6 space-x-4">
              <div
                className="radial-progress text-blue-500 bg-blue-100 rounded-full p-2 shadow-lg"
                style={{ "--value": 70, width: "6rem", height: "6rem" }}
                role="progressbar"
              >
                <span className="text-2xl font-semibold text-blue-600">70%</span>
              </div>
              <div className="text-blue-600 text-lg">
                Reduce your team's<br /> workload by up to..
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default Middle;
