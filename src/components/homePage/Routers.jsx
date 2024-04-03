import { useNavigate } from "react-router-dom";
import router1 from "../../data/router1.png";
import router2 from "../../data/router2.png";
import router3 from "../../data/router3.png";

export default function Routers() {
  const navigate = useNavigate();

  return (
    <div className="md:text-md m-auto w-[95%] text-sm lg:w-[70%] lg:text-lg">
      <p className="mb-5 mt-20 text-center text-lg  md:text-[24px]">
        Grab the best dael on{" "}
        <span className="text-[#0080CF]">Interner Router</span>
      </p>
      <div className="items-center justify-between gap-3 space-y-5 md:flex md:space-y-0 lg:flex lg:space-y-0">
        <div className="relative flex flex-col items-center justify-between gap-5 rounded-xl  border border-[#0080CF] px-5 py-2 text-center font-light">
          <p>
            <img src={router1} alt="Router image" />
          </p>
          <p>Superfast Outdoor ODU Device</p>
          <p className="">NGN28,500</p>
          <p>
            <button
              className="w-full rounded-2xl bg-[#0080CF] px-10 py-1 text-center text-white"
              onClick={() => navigate("/device-details")}
            >
              Buy Now
            </button>
          </p>
          <div className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-xl bg-[#DE0F04] p-3 text-xl text-white">
            Hot
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-5 rounded-xl  border border-[#0080CF] px-5 py-2 text-center font-light">
          <p>
            <img src={router2} alt="Router image" />
          </p>
          <p>Superfast Outdoor Broadband Device</p>
          <p className="">NGN28,500</p>
          <p>
            <button className="w-full rounded-2xl bg-[#0080CF] px-10 py-1 text-center text-white">
              Buy Now
            </button>
          </p>

          <div className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-xl  bg-[#DE0F04] p-3 text-xl text-white">
            Hot
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-between gap-5 rounded-xl  border border-[#0080CF] px-5 py-2 text-center font-light">
          <p>
            <img src={router3} alt="Router image" />
          </p>
          <p>Superfast Outdoor IDU Device</p>
          <p className="">NGN28,500</p>
          <p>
            <button className="w-full rounded-2xl bg-[#0080CF] px-10 py-1 text-center text-white">
              Buy Now
            </button>
          </p>

          <div className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-xl  bg-[#DE0F04] p-3 text-xl text-white">
            Hot
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center pb-10">
        <button className=" flex items-center justify-between gap-2 rounded-2xl  border border-[#0080CF] px-5 py-3 text-center font-light text-[#0080CF]">
          <span> View All</span>
          <span>></span>
        </button>
      </div>
    </div>
  );
}
