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

export default function Home() {
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
    </div>
  );
}
