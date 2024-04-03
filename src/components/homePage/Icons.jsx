import icon1 from "../../data/Rectangle14.gif";
import icon2 from "../../data/Rectangle15.gif";
import icon3 from "../../data/Rectangle16.gif";
import icon4 from "../../data/Rectangle17.gif";
import icon5 from "../../data/Rectangle18.gif";
import icon6 from "../../data/Rectangle19.gif";

export default function Icons() {
  return (
    <div className="md:text-md m-auto mb-5 mt-10 grid w-[95%] grid-cols-3 justify-between gap-10 rounded-xl border-2 p-5 text-sm shadow-md md:flex lg:flex lg:w-[85%] lg:p-10 lg:text-lg">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="iconbg rounded-xl">
          <img src={icon1} alt="icon1" className="m-auto lg:w-[70%]" />
        </p>
        <p>Super fast</p>
      </div>
      <div className="hidden border font-light md:block lg:block"></div>
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="iconbg rounded-xl">
          <img src={icon2} alt="icon2" className="m-auto lg:w-[70%]" />
        </p>
        <p>Customer support</p>
      </div>
      <div className="hidden border font-light md:block lg:block"></div>
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="iconbg rounded-xl">
          <img src={icon3} alt="icon3" className="m-auto lg:w-[70%]" />
        </p>
        <p>Wide coverage</p>
      </div>

      <div className="hidden border font-light md:block lg:block"></div>
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="iconbg rounded-xl">
          <img src={icon4} alt="icon4" className="m-auto lg:w-[70%]" />
        </p>
        <p>Reliable</p>
      </div>
      <div className="hidden border font-light md:block lg:block"></div>
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="iconbg rounded-xl">
          <img src={icon5} alt="icon5" className="m-auto lg:w-[70%]" />
        </p>
        <p>Selfcare</p>
      </div>
      <div className="hidden border font-light md:block lg:block"></div>
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="iconbg rounded-xl">
          <img src={icon6} alt="icon6" className="m-auto lg:w-[70%]" />
        </p>
        <p>Secure</p>
      </div>
    </div>
  );
}
