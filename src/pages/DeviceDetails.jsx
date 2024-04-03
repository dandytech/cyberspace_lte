import star from "../data/Star.svg";
import star5 from "../data/Star5.svg";
import eclipse from "../data/Ellipse.svg";

import router1 from "../data/router1.png";
import router2 from "../data/router2.png";
import router3 from "../data/router3.png";
import router4 from "../data/router4.png";

import { useState } from "react";
import NewsLetter from "../components/homePage/NewsLetter";

export default function DeviceDetails() {
  const [activeTab, setActiveTab] = useState(1);
  const [activeImgTab, setActiveImgTab] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(28500);
  const [tPrice, setTPrice] = useState(28500);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleImgTabClick = (tabImgNumber) => {
    setActiveImgTab(tabImgNumber);
  };

  const handleDecrement = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
    setTPrice(tPrice - price);
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setTPrice(price + tPrice);
  };

  //format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };
  return (
    <div className="md:text:md text-style bg-style text-sm lg:text-lg">
      <div className=" space-y-3 bg-[#057FCC] py-10 text-center text-white">
        {" "}
        <h1 className="font-semibold ">INTERNET ROUTERS</h1>
        <p className="font-light">Home / Product / INTERNET ROUTERS</p>
      </div>

      <div className="m-auto w-[95%] items-start gap-3 py-10 lg:flex lg:w-[85%] lg:gap-10">
        <div className="flex justify-center gap-3 p-3 lg:w-[10%] lg:flex-col">
          <button
            className={
              activeImgTab === 1
                ? "border border-[#057FCC]  p-3 shadow-md"
                : "p-3 shadow-md "
            }
            onClick={() => handleImgTabClick(1)}
          >
            <img src={router1} alt="image" width="100" />
          </button>
          <button
            className={
              activeImgTab === 2
                ? "border border-[#057FCC] p-3  shadow-md"
                : "p-3 shadow-md "
            }
            onClick={() => handleImgTabClick(2)}
          >
            <img src={router2} alt="image" width="100" />
          </button>
          <button
            className={
              activeImgTab === 3
                ? "border border-[#057FCC] p-3  shadow-md"
                : "p-3 shadow-md "
            }
            onClick={() => handleImgTabClick(3)}
          >
            <img src={router3} alt="image" width="100" />
          </button>
        </div>

        <div className=" lg:w-[50%]">
          <p className="mb-4 border bg-[#e8e6e6]">
            {activeImgTab === 1 && (
              <img src={router1} alt="image" width="100" className="w-full" />
            )}
            {activeImgTab === 2 && (
              <img src={router2} alt="image" width="100" className="w-full" />
            )}
            {activeImgTab === 3 && (
              <img src={router3} alt="image" width="100" className="w-full" />
            )}
          </p>
          <p className="text-xs font-extralight">
            *Superfast broadband device + 70gb
          </p>
        </div>

        <div className="flex flex-col justify-start  space-y-3 text-sm  lg:w-[40%]">
          <p className=" font-extralight">Brand: Cyberspace LTE</p>
          <p>Availability: 19 Devices</p>
          <p className="font-semibold uppercase">
            Superfast broadband device + 70gb
          </p>
          <div className="flex items-center justify-start gap-1">
            {" "}
            <button>
              <img src={star} alt="star" />
            </button>
            <button>
              <img src={star} alt="star" />
            </button>
            <button>
              <img src={star} alt="star" />
            </button>
            <button>
              <img src={star5} alt="star" />
            </button>
          </div>

          <p className="flex items-center justify-start gap-1">
            <span>
              {" "}
              <img src={eclipse} alt="eclipse" />
            </span>
            <span>Multiple User Wi-Fi Access Up to 15 Users</span>
          </p>
          <p className="flex items-center justify-start gap-1">
            <span>
              {" "}
              <img src={eclipse} alt="eclipse" />
            </span>
            <span>
              Supported Features Which Includes Parental Control, Speed
              Limiting, IP Blacklist
            </span>
          </p>

          <p className="flex items-center justify-start gap-1">
            <span>
              {" "}
              <img src={eclipse} alt="eclipse" />
            </span>
            <span>
              Superior Streaming, Online Gaming, Data Download, And Uploads.
            </span>
          </p>
          <p className="flex items-center justify-start gap-1">
            <span>
              {" "}
              <img src={eclipse} alt="eclipse" />
            </span>
            <span>Data Validity 30 Days</span>
          </p>
          <p className="flex items-center justify-start gap-1">
            <span>
              {" "}
              <img src={eclipse} alt="eclipse" />
            </span>
            <span> Ethernet Port</span>
          </p>
          <p className="flex items-center justify-start gap-1">
            <span>
              {" "}
              <img src={eclipse} alt="eclipse" />
            </span>
            <span>
              {" "}
              Battery Life Up to 4Hrs Working & Up to 32Hrs Standby Time
            </span>
          </p>
          <p className="flex items-center justify-start gap-1">
            <span>
              {" "}
              <img src={eclipse} alt="eclipse" />
            </span>
            <span>Wi-Fi Frequency: Supports 2.4GHz and 5GHz Frequency </span>
          </p>
          <div className="flex items-center justify-start border-b-2 border-t-2 py-5">
            <div className="flex items-center border border-[#057FCC] px-10 py-2 text-[#057FCC]">
              WHITE
            </div>
            <div className="px-10 py-3 text-gray-400">BLACK</div>
          </div>
          <p>
            NGN (<span className="text-xs font-extralight">incl. of VAT</span>)
            :
          </p>
          <p className="flex items-center justify-start gap-5 text-lg font-bold">
            <span>{formatCurrency(tPrice)}</span>{" "}
            <span className="text-gray-400 line-through">₦ 28,500</span>
          </p>
          <p className="g flex items-center justify-start gap-3 lg:gap-10">
            <div className="flex gap-3  border-2 px-5 py-0 text-xl">
              <button onClick={handleDecrement}>-</button>
              <span className="border-l-2 border-r-2 px-3 py-2">
                {quantity}
              </span>
              <button onClick={handleIncrement}>+</button>
            </div>

            <div className="bg-[#057FCC] px-5 py-2 text-center">
              <button className="bg-[##057FCC] text-white">Buy Now</button>
            </div>
            <div className="border border-[#057FCC] px-5 py-2 text-center text-[#057FCC]">
              <button>Add to Cart</button>
            </div>
          </p>
        </div>
      </div>

      <div className="m-auto mb-10 w-[95%] p-5 lg:w-[85%]">
        <div className="m-auto mt-10 flex items-center justify-between border-b-2 text-center lg:w-[50%]">
          <button
            className={activeTab === 1 ? "border-b-2 border-[#057FCC] " : " "}
            onClick={() => handleTabClick(1)}
          >
            Description
          </button>
          <button
            className={activeTab === 2 ? "border-b-2 border-[#057FCC] " : " "}
            onClick={() => handleTabClick(2)}
          >
            Specification
          </button>
          <button
            className={activeTab === 3 ? "border-b-2 border-[#057FCC] " : " "}
            onClick={() => handleTabClick(3)}
          >
            Reviews
          </button>
          <button
            className={activeTab === 4 ? "border-b-2 border-[#057FCC] " : " "}
            onClick={() => handleTabClick(4)}
          >
            Coverage
          </button>
        </div>

        <div>
          {" "}
          {activeTab === 1 && (
            <p className="mt-5 text-sm font-light">
              The Cyberspace LTE Internet router offers lightning-fast broadband
              connectivity along with a generous data allowance of 70GB. This
              router ensures high-speed internet access, making it ideal for
              both personal and professional use. With its robust LTE
              capabilities, users can enjoy seamless online activities,
              including streaming, gaming, and browsing, without worrying about
              data limitations. More ...
            </p>
          )}
          {activeTab === 2 && <p className="mt-5">specifications Here</p>}
          {activeTab === 3 && <p className="mt-5">Reviews Here</p>}
          {activeTab === 4 && <p className="mt-5">Coverage Here</p>}
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}
