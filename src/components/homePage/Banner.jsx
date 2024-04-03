// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../../index.css";

import modem from "../../data/modem.png";
import arrow from "../../data/arrowforward.svg";

export default function Banner() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000, //delay 7 sec
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper1"
      >
        <SwiperSlide className="w-full">
          {" "}
          <div className="m-auto mt-3 h-auto w-[95%] rounded-xl bg-[url('/src/data/Frame.png')] bg-cover bg-center bg-no-repeat lg:w-[85%] lg:px-10">
            <div className="items-center justify-between p-5 pb-10 font-medium text-white md:flex lg:flex">
              <div className="flex flex-col gap-5">
                <p className="text-[20px] md:text-[30px] ">
                  Double Your Online Presence
                </p>
                <p className="text-[30px] font-bold md:text-[50px]">
                  New LTE Modem
                </p>
                <p className="flex items-center justify-start gap-3 text-[20px]">
                  <span>Enjoy Smart Deals</span>
                  <span>
                    {" "}
                    <img src={arrow} alt="arrow" />
                  </span>
                </p>
              </div>

              <div>
                <img src={modem} alt="modems" width="90%" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          {" "}
          <div className="m-auto mt-3 h-auto w-[95%] rounded-xl bg-[url('/src/data/Frame.png')] bg-cover bg-center bg-no-repeat lg:w-[85%] lg:px-10">
            <div className="items-center justify-between p-5 pb-10 font-medium text-white md:flex lg:flex">
              <div className="flex flex-col gap-5">
                <p className="text-[20px] md:text-[30px] ">
                  Double Your Online Presence
                </p>
                <p className="text-[30px] font-bold md:text-[50px]">
                  New LTE Modem
                </p>
                <p className="flex items-center justify-start gap-3 text-[20px]">
                  <span>Enjoy Smart Deals</span>
                  <span>
                    {" "}
                    <img src={arrow} alt="arrow" />
                  </span>
                </p>
              </div>

              <div>
                <img src={modem} alt="modems" width="90%" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full">
          {" "}
          <div className="m-auto mt-3 h-auto w-[95%] rounded-xl bg-[url('/src/data/Frame.png')] bg-cover bg-center bg-no-repeat lg:w-[85%] lg:px-10">
            <div className="items-center justify-between p-5 pb-10 font-medium text-white md:flex lg:flex">
              <div className="flex flex-col gap-5">
                <p className="text-[20px] md:text-[30px] ">
                  Double Your Online Presence
                </p>
                <p className="text-[30px] font-bold md:text-[50px]">
                  New LTE Modem
                </p>
                <p className="flex items-center justify-start gap-3 text-[20px]">
                  <span>Enjoy Smart Deals</span>
                  <span>
                    {" "}
                    <img src={arrow} alt="arrow" />
                  </span>
                </p>
              </div>

              <div>
                <img src={modem} alt="modems" width="90%" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full">
          {" "}
          <div className="m-auto mt-3 h-auto w-[95%] rounded-xl bg-[url('/src/data/Frame.png')] bg-cover bg-center bg-no-repeat lg:w-[85%] lg:px-10">
            <div className="items-center justify-between p-5 pb-10 font-medium text-white md:flex lg:flex">
              <div className="flex flex-col gap-5">
                <p className="text-[20px] md:text-[30px] ">
                  Double Your Online Presence
                </p>
                <p className="text-[30px] font-bold md:text-[50px]">
                  New LTE Modem
                </p>
                <p className="flex items-center justify-start gap-3 text-[20px]">
                  <span>Enjoy Smart Deals</span>
                  <span>
                    {" "}
                    <img src={arrow} alt="arrow" />
                  </span>
                </p>
              </div>

              <div>
                <img src={modem} alt="modems" width="90%" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
