const testimonials = [
  {
    id: 1,
    photo: "https://i.pravatar.cc/48?u=499274",
    name: "Daniel Amaechi",
    comment:
      "Im absolutely in love with @cyberpaylte. Since switching to routers from them, my internet connection has never been more reliable. Highly recommended!",
    role: "Product Designer at Greenmouse",
  },
  {
    id: 2,
    photo: "https://i.pravatar.cc/48?u=494374",
    name: "Hamzat Adeleke",
    comment:
      "I'm thrilled 💜 with the performance of my new router from @cyberpaylte. Fast speeds and seamless connectivity make it a top choice!",
    role: "Product Manager at Zapier",
  },
  {
    id: 2,
    photo: "https://i.pravatar.cc/48?u=499474",
    name: "Lizy Onah",
    comment:
      " Outstanding customer service from @cyberpaylte. They helped me find the perfect router to meet my needs, and I couldn't be happier!",
    role: "Secreatary at Zapier",
  },
  {
    id: 4,
    photo: "https://i.pravatar.cc/48?u=49943374",
    name: "Promise Ezema",
    comment:
      "Im absolutely in love with @cyberpaylte. Since switching to routers from them, my internet connection has never been more reliable. Highly recommended!",
    role: "Backend Enginner, Greenmouse Tech",
  },
  {
    id: 5,
    photo: "https://i.pravatar.cc/48?u=4967374",
    name: "Godswill Ijezie",
    comment:
      "I'm thrilled 💜 with the performance of my new router from @cyberpaylte. Fast speeds and seamless connectivity make it a top choice!",
    role: "Front-end Enginner, Greenmouse Tech",
  },
  {
    id: 6,
    photo: "https://i.pravatar.cc/48?u=49942274",
    name: "Mary Uchechi Adeleke",
    comment:
      " Outstanding customer service from @cyberpaylte. They helped me find the perfect router to meet my needs, and I couldn't be happier!",
    role: "Chief Marketer, Greenmouse Tech",
  },
];

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import Testimonies from "./Testimonies";
import { useEffect, useState } from "react";

export default function Testimonial() {
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
    <div className="relative bg-[#057FCC] py-20">
      <div className="md:text-md m-auto  w-[95%] text-sm lg:w-[85%] lg:text-lg ">
        <p className="mb-10 text-2xl font-semibold text-white">Testimonials</p>
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
          className="swiper3"
        >
          {testimonials.map((testimony) => (
            <SwiperSlide key="testimony.id">
              <Testimonies testimony={testimony} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
