import Banner from "../components/homePage/Banner";
import Icons from "../components/homePage/Icons";
import cart from "../data/cart2.png";
import Routers from "../components/homePage/Routers";
import Icons2 from "../components/homePage/Icons2";
import Routers2 from "../components/homePage/Routers2";
import Testimonial from "../components/homePage/Testimonial";
import Explore from "../components/homePage/DataPlans";
import LatestNews from "../components/homePage/LatestNews";
import NewsLetter from "../components/homePage/NewsLetter";
import whatsapp from "../data/whatsapp.png";
import chat from "../data/chatMsg.png";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Home() {
  //scroll up
  const [visible, setVisible] = useState(false);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Check if the scroll position is greater than or equal to 20 pixels
      setVisible(scrollY > 100);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="bg-style text-style h-auto bg-white">
      <Banner />
      <div className="fixed right-10 z-30 mt-[-200px]">
        <div className="absolute  z-40 flex w-[40px] items-center justify-center bg-[#DE0F04] p-2 text-center">
          <button>
            {" "}
            <img src={cart} alt="cart" />{" "}
          </button>
        </div>

        <div className="fixed right-[210px] mt-[410px] lg:mt-[530px] ">
          <div className="absolute  z-50 flex h-auto  w-[250px]  items-center justify-center p-2 text-center">
            <div className="flex w-[200px]">
              <button>
                {" "}
                <img
                  src={whatsapp}
                  alt="whatsApp"
                  width="100"
                  className="w-full"
                />{" "}
              </button>
              <button>
                {" "}
                <img src={chat} alt="chat" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Icons />
      <Routers />
      <Icons2 />
      <Routers2 />
      <Testimonial />

      <Explore />
      <LatestNews />

      <NewsLetter />

      {/* <TestSwiperComponent /> */}

      <div
        onClick={scroll}
        className={`bottom-0 right-0 z-50  cursor-pointer items-center justify-center  ${
          visible ? "fixed bottom-0 right-0" : ""
        }`}
      >
        <span className="text-2x text-style bg-style md:text-3xl lg:text-4xl">
          <AiOutlineArrowUp />
        </span>
      </div>
    </div>
  );
}
