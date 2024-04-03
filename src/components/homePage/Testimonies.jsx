import { SwiperSlide } from "swiper/react";
import Modal from "../Modal";

export default function Testimonies({ testimony }) {
  return (
    <Modal>
      

        <div className="bg-style flex w-full flex-col rounded-xl bg-white p-5 gap-4 lg:p-10 justify-between lg:h-[220px]">

          <div>
            {testimony.comment.length < 30 ? (
              testimony.comment
            ) : (
              <>
                {testimony.comment.split(" ").slice(0, 15).join(" ")}
                <Modal.Open opens="more">
                  <span className="cursor-pointer text-blue-600"> ..more</span>
                </Modal.Open>
              </>
            )}

            <Modal.Window name="more">
              <div className="h-[70vh] w-[290px] overflow-y-auto  p-5 md:w-[600px] lg:w-[800px] lg:p-5     ">
                <h1 className="font-lg font-bold"> {testimony.name}</h1>
                <p> {testimony.comment}</p>
              </div>
            </Modal.Window>
            {/* <TextExpander
            collapsedNumWords={10}
            expandButtonText="more"`
            collapseButtonText="less"
            buttonColor="#ff6622"
          >
            {testimony.testimony}
          </TextExpander> */}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-[70px] w-[70px] items-center rounded-full">
              <img
                src={testimony.photo}
                alt="photo"
                width="100"
                className="h-[60px] w-[60px] rounded-full"
              />
            </div>
            <div>
              <p className="text-sm font-semibold">{testimony.name}</p>
              <p className="text-sm font-light">{testimony.role}</p>
            </div>
          </div>


        </div>

     
    </Modal>
  );
}
