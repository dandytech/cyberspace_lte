// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import router1 from "../../data/router2.png";
import router2 from "../../data/router1.png";
import router3 from "../../data/router3.png";
import { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

export default function Routers2() {
  const [slidesPerView, setSlidesPerView] = useState(3); // Default slidesPerView

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="md:text-md router-text  m-auto w-[95%] pb-10 text-sm lg:w-[85%] lg:text-lg">
      <div className="mb-10 mt-20 flex items-center justify-between border-b-2">
        <div className=" w-auto border-b-4 border-b-[#0080CF] text-lg">
          <span> Explore Great Deals On </span>
          <span className="text-[#0080CF]">Devices</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <button>See More</button>
          <span className="text-[#0080CF]">
            <RiArrowRightSLine />
          </span>
        </div>
      </div>

      <div className="pb-10">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          autoplay={{
            delay: 7000, //delay 7 sec
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="swiper2"
        >
          <SwiperSlide className="h-">
            {" "}
            <div className="items-center justify-between gap-2 rounded-2xl bg-[url('/src/data/Frame1.png')] bg-cover bg-center bg-no-repeat px-2 text-white lg:flex lg:h-[250px] lg:px-5">
              <div className="flex flex-col justify-between gap-3 py-5 lg:w-[70%] lg:gap-10">
                <div className="space-y-2">
                  <span className="rounded-xl bg-gray-600  px-5 py-2">
                    BROADBAND
                  </span>
                  <p className="text-md font-light">
                    Get unlimited Internet with our broadband devices
                  </p>
                </div>

                <div className="text-xl font-bold">Up to 80% OFF</div>
              </div>

              <div>
                <img src={router1} alt="router image" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="items-center justify-between space-y-7 rounded-2xl bg-[url('/src/data/Frame2.png')] bg-cover bg-center bg-no-repeat px-2 lg:flex lg:h-[250px] lg:gap-2 lg:space-y-0 lg:px-5">
              <div className="flex flex-col justify-between gap-3 py-5 lg:w-[70%] lg:gap-7">
                <span className=" rounded-xl bg-[#F6DE8D]  px-5 py-2 text-center">
                  DEVICES
                </span>

                <div className="w-auto bg-yellow-400  px-2 py-2">
                  Up to 80% OFF
                </div>

                <div className="font-semibold">INTERNET ROUTER </div>
              </div>

              <div>
                <img src={router2} />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="items-center justify-between gap-2 rounded-2xl bg-[url('/src/data/Frame3.png')] bg-cover bg-center bg-no-repeat px-2 lg:flex lg:h-[250px] lg:px-5">
              <div className="flex  flex-col justify-between gap-10 lg:w-[80%]">
                <div className="space-y-3 py-3">
                  <button className="w-auto rounded-xl bg-[#FFD1B0] px-5 py-2 text-sm">
                    DEALS
                  </button>
                  <p className="text-md font-semibold">5G MODEM</p>
                  <p className="text-xs">COMES WITH FREE 1000GB</p>
                  <div className="text-md flex flex-col font-semibold">
                    <span>NGN20,000</span>
                    <span className="text-xs font-light">PRICE</span>
                  </div>
                </div>
              </div>

              <div>
                <img src={router3} />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="h-">
            {" "}
            <div className="h-auto items-center justify-between gap-2 rounded-2xl bg-[url('/src/data/Frame1.png')] bg-cover bg-center bg-no-repeat px-2 text-white lg:flex lg:h-[250px] lg:px-5">
              <div className="flex flex-col justify-between gap-3 py-5 lg:w-[70%] lg:gap-10">
                <div className="space-y-2">
                  <span className="rounded-xl bg-gray-600  px-5 py-2">
                    BROADBAND
                  </span>
                  <p className="text-md font-light">
                    Get unlimited Internet with our broadband devices
                  </p>
                </div>

                <div className="text-xl font-bold">Up to 80% OFF</div>
              </div>

              <div>
                <img src={router1} alt="router image" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="items-center justify-between space-y-0 rounded-2xl bg-[url('/src/data/Frame2.png')] bg-cover bg-center bg-no-repeat px-2 lg:flex lg:h-[250px] lg:gap-2 lg:space-y-0 lg:px-5">
              <div className="flex flex-col justify-between gap-3 py-5 lg:w-[70%] lg:gap-7">
                <span className=" rounded-xl bg-[#F6DE8D]  px-5 py-2 text-center">
                  DEVICES
                </span>

                <div className="w-auto bg-yellow-400  px-2 py-2">
                  Up to 80% OFF
                </div>

                <div className="font-semibold">INTERNET ROUTER </div>
              </div>

              <div>
                <img src={router2} />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="items-center justify-between gap-2 rounded-2xl bg-[url('/src/data/Frame3.png')] bg-cover bg-center bg-no-repeat px-2 lg:flex lg:h-[250px] lg:px-5">
              <div className="flex  flex-col justify-between gap-10 lg:w-[80%]">
                <div className="space-y-3 py-3">
                  <button className="w-auto rounded-xl bg-[#FFD1B0] px-5 py-2 text-sm">
                    DEALS
                  </button>
                  <p className="text-md font-semibold">5G MODEM</p>
                  <p className="text-xs">COMES WITH FREE 1000GB</p>
                  <div className="text-md flex flex-col font-semibold">
                    <span>NGN20,000</span>
                    <span className="text-xs font-light">PRICE</span>
                  </div>
                </div>
              </div>

              <div>
                <img src={router3} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
