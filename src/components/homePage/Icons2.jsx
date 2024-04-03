import Headphone from "../../data/Headphones.png";
import Creditcard from "../../data/CreditCard.png";
import Trophy from "../../data/Trophy.png";
import Package from "../../data/Package.png";

export default function Icons2() {
  return (
    <div className="md:text-md m-auto mb-5 mt-10 grid w-[95%] grid-cols-1 gap-10 rounded-xl border-2 p-5 text-sm shadow-md  md:grid-cols-4 md:justify-between md:p-10 lg:flex lg:w-[85%] lg:grid-cols-4 lg:text-lg">
      <div className="flex items-center justify-center gap-3 text-center md:justify-between">
        <div className="iconbg rounded-xl">
          <img src={Package} alt="icon1" />
        </div>
        <div>
          <p>FASTED DELIVERY</p>
          <p className="font-light">Delivery in 24/H</p>
        </div>
      </div>
      <div className="hidden border font-light lg:block"></div>

      <div className="flex items-center justify-center gap-1 text-center lg:justify-between">
        <div className="iconbg rounded-xl">
          <img src={Trophy} alt="icon1" />
        </div>
        <div>
          <p>QUALITY DEVICES</p>
          <p className="font-light">100% Quality products</p>
        </div>
      </div>
      <div className="hidden border font-light lg:block"></div>

      <div className="flex items-center justify-center gap-1 text-center lg:justify-between">
        <div className="iconbg rounded-xl">
          <img src={Creditcard} alt="icon1" />
        </div>
        <div>
          <p>SECURE PAYMENT</p>
          <p className="font-light">Your money is safe</p>
        </div>
      </div>
      <div className="hidden border font-light  lg:block"></div>
      <div className="flex items-center justify-center gap-1 text-center lg:justify-between">
        <div className="iconbg rounded-xl">
          <img src={Headphone} alt="icon1" />
        </div>
        <div>
          <p>SUPPORT 24/7</p>
          <p className="font-light">Live contact/message</p>
        </div>
      </div>
    </div>
  );
}
