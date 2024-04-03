export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="w-full bg-[#191C1F] text-white">
      <div className="m-auto w-[95%] px-3 py-10 lg:w-[85%]">

        <div className="grid grid-cols-1 text-center justify-between gap-8 md:flex lg:flex lg:gap-10 ">

          <div>
            <h1 className="md:text-md mb-3 text-sm font-semibold lg:text-lg">
              CUSTOMER SUPPORTS
            </h1>
            <div className="space-y-2 text-sm font-light text-[#ADB7BC]">
              <p>12 Ologun Agbaje Street, Victoria Island, Lagos, Nigeria</p>
              <p>015159999, 09076555420</p>
              <p>lteretail@cyberspace.net.ng</p>
              <p>cyberspacelteltd@gmail.com</p>
            </div>
          </div>
          <div>
            <h1 className="md:text-md mb-3 text-sm font-semibold lg:text-lg">
              QUICK LINKS
            </h1>
            <div className="space-y-2 text-sm font-light text-[#ADB7BC] flex flex-col">
              <button>Home</button>
              <button>Shop Product</button>
              <button>Personal</button>
              <button>Business</button>
              <button>Our Dealers</button>
              <button>Coverage</button>
            </div>
          </div>
          <div>
            <h1 className="md:text-md mb-3 text-sm font-semibold lg:text-lg">
              SUPPORT
            </h1>
            <div className="space-y-2 text-sm font-light text-[#ADB7BC] flex flex-col">
              {" "}
              <button>Terms & Conditions</button>
              <button>Help</button>
              <button>Privacy Policy</button>
              <button>Return Policy</button>
              <button>Contact Us</button>
            </div>
          </div>
          <div>
            <h1 className="md:text-md mb-3 text-sm font-semibold lg:text-lg">
              ABOUT
            </h1>
            <div className="space-y-2 text-sm font-light text-[#ADB7BC] flex flex-col">
              {" "}
              <button>My Account</button>
              <button>Orders</button>
              <button>Wishlist</button>
              <button>Payment</button>
              <button>Shipping</button>
            </div>
          </div>
          <div>
            <h1 className="md:text-md mb-3 text-sm font-semibold lg:text-lg">
              STORE
            </h1>
            <div className="space-y-2 text-sm font-light text-[#ADB7BC] flex flex-col">
              {" "}
              <button>Affiliate</button>
              <button>Discount</button>
              <button>Sales</button>
              <button>Contact</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 border-t border-t-gray-600 py-1 text-center font-extralight text-[#ADB7BC]">
        © {year} Cyberspace LTE. All Rights Reserved | Whistle Blower
      </div>
    </div>
  );
}
