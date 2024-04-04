import "../index.css";
import discount from "../data/Discount.svg";
import location from "../data/Location.svg";
import truck from "../data/iconoir_delivery-truck.svg";
import logo from "../data/logo.png";
import search from "../data/Search.svg";
import cart from "../data/Buy.svg";
import user from "../data/user.svg";
import menuIcon from "../data/Vector.svg";
import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Check if the scroll position is greater than or equal to 20 pixels
      setIsSticky(scrollY >= 50);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once
  const navigate = useNavigate();

  return (
    <div
      className={`w-[100] z-50 ${isSticky ? "border-b-3 header fixed z-50 m-auto w-[100%] border-b-2" : ""}`}
    >
      <div className="hidden bg-[url('/src/data/Rectangle1.png')] bg-cover  bg-center bg-no-repeat p-3 font-extralight text-white lg:block">
        <div className="m-auto flex w-[85%]  items-center justify-between">
          <div>Welcome to Cyberspace LTE!</div>
          <div>
            <div className="flex justify-start space-x-2">
              <span className="flex">
                <img src={discount} />{" "}
              </span>
              <span> All Offers |</span>
              <span>
                <img src={location} />
              </span>
              <span>
                {" "}
                12 Ologun Agbaje Street, Victoria Island, Lagos, Nigeria |{" "}
              </span>{" "}
              <span>
                <img src={truck} />
              </span>
              <span>Location Delivery |</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`bg-style text-style py-5  ${isSticky ? "bg-style text-style lg:p-5 lg:px-0 " : "bg-white lg:px-0"}`}
      >
        <div className="relative m-auto flex items-center justify-between lg:w-[85%]">
          <button onClick={() => navigate("/home")}>
            <img src={logo} alt="logo" />
          </button>

          <div className="flex items-center  justify-between gap-10">
            <div className="hidden items-center justify-between gap-7 lg:flex">
              {" "}
              <button>Shop Products</button> <button>Coverage</button>
              <button>Our delears</button>
            </div>

            <div className="hidden items-center justify-between gap-7 md:flex">
              {" "}
              <button className="flex items-center gap-2 rounded-lg bg-[#F3F9FB] px-3 py-2">
                <span>
                  <img src={search} alt="search icon" />
                </span>
                <span>
                  <input
                    className="text-style  bg-style w-[300px] rounded-md  bg-[#F3F9FB] px-2 py-2"
                    placeholder="Search devices, plans and more..."
                  />
                </span>
              </button>
            </div>
            <div className="text-lg ml-7">
              <DarkModeToggle />
            </div>

            <div className="hidden items-center  justify-between gap-7 lg:flex">
              {" "}
              <button className="flex">
                <span>
                  <img src={user} alt="search icon" />
                </span>
                <span>Client Login</span>
              </button>
              <button>|</button>
            </div>

            <button className="flex items-center">
              <span>
                <img src={cart} alt="cart icon icon" />
              </span>
              <span>Cart</span>
            </button>

            <button className="flex px-2" onClick={handleShow}>
              <span>
                <img src={menuIcon} alt="menu icon" />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`${!show ? "hidden" : "absolute right-0 top-0 z-50 rounded-bl-xl rounded-tl-xl border bg-[#0080CF] p-5 text-white transition-all duration-500 lg:right-[127px] lg:top-[135px]"} `}
        >
          <div className="mb-7 bg-white text-right text-red-500">
            <button
              className="absolute right-0 top-0 bg-white p-1 px-3 text-xl"
              onClick={handleShow}
            >
              X
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex flex-col items-center justify-center gap-3 lg:hidden">
              <button>Shop Products</button>
              <button>Coverage</button>
              <button>Our delears</button>
              <button>Client Login</button>
            </div>
            {/* <div className={`${!show ? "hidden" :  "flex-col items-center justify-center gap-3 md:flex"}`}>
              {" "} */}
            <div className="flex flex-col gap-3 lg:flex">
              <button>Other menus 1</button>
              <button>Other menus 2</button>
              <button>Other menus 3</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
