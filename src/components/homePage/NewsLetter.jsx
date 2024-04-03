import arrowRight from "../../data/ArrowRight.svg";

export default function NewLetter() {
  return (
    <div className="bg-[#057FCC] py-20 text-center text-white text-sm md:text-md lg:text-lg">
      <div className="m-auto w-[95%] md:w-[60%] lg:w-[30%]">
        <h1 className=" py-5 text-2xl font-semibold ">
          Subscribe to our newsletter
        </h1>
        <p>
          Subscribe to our newsletter and be the first to know when we have new
          products to boost your internet expereinece
        </p>

        <div className="mt-2 flex items-center justify-between bg-white px-5 py-2">
          <span className="w-[60%]">
            <input
              placeholder="Email address"
              type="text"
              className="w-full text-black"
            />
          </span>

          <buttton className="flex  items-center gap-2 bg-[#FA8232] px-3 py-1">
            <button>SUBSCRIBE</button>
            <span>
              <img src={arrowRight} alt="icon" />
            </span>
          </buttton>
        </div>
      </div>
    </div>
  );
}
