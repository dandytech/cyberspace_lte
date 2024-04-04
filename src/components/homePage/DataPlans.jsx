export const plans = [
  {
    id: 1,
    name: "Modem + 70GB Data bundle + Voice",
    type: "CYBER STARTER",
    duration: "30 Days",
    price: "28,500",
  },
  {
    id: 2,
    name: "Modem + 100GB Data bundle + Voice",
    type: "CYBER STARTER",
    duration: "30 Days",
    price: "35,500",
  },
  {
    id: 2,
    name: "Unlimited volume (1 Mbps/1Mbps)",
    type: "PREMIUM",
    duration: "1 Year",
    price: "28,200",
  },
];

import { RiArrowRightSLine } from "react-icons/ri";

export default function Explore() {
  return (
    <div className="md:text-md m-auto w-[95%] pb-10 text-sm lg:w-[85%] lg:text-lg">
      <div
        className="mb-5 mt-20 flex items-center justify-between border-b-2"
        data-aos="flip-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <div className=" md:text-md text-md w-auto border-b-4 border-b-[#0080CF] lg:text-lg">
          <span> Our Starter Plans and </span>
          <span className="text-[#0080CF]">Data Pricing</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <button>See More</button>
          <span className="text-[#0080CF]">
            <RiArrowRightSLine />
          </span>
        </div>
      </div>

      <div className=" items-center justify-between gap-2 space-y-3 lg:flex lg:space-y-0">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="rounded-xl border border-[#0080CF] p-5 hover:border-[#DE0F04] lg:px-20 lg:py-10"
          >
            <div className="border-b py-3 text-[#0080CF] ">{plan.name}</div>
            <div className="border-b py-3 font-light text-gray-300 ">
              {plan.type}
            </div>
            <div className="border-b py-3 font-light text-[#0080CF]">
              {plan.duration}
            </div>
            <div className="py-3 font-semibold ">{plan.price}</div>
            <div className="mt-5 rounded-md bg-[#0080CF] px-10 py-3 text-center font-semibold text-white">
              <button>SUBSCRIBE TO PLAN</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
