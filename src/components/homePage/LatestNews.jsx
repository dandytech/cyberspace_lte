export const blogs = [
  {
    id: 1,
    banner: "https://dummyimage.com/1000/200/off&text=Blog+Bannner",
    poster: "Admin",
    date: "8 March, 2024",
    comments: "453",
    title:
      "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
    message:
      "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
  },
  {
    id: 2,
    banner: "https://dummyimage.com/1000/200/off&text=Blog+Bannner",
    poster: "Admin",
    date: "8 March, 2024",
    comments: "783",
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
    message:
      "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem.",
  },
  {
    id: 3,
    banner: "https://dummyimage.com/1000/200/off&text=Blog+Bannner",
    poster: "Admin",
    date: "8 March, 2024",
    comments: "826",
    title: "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
    message:
      "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
  },
];

import admin from "../../data/UserCircle.png";
import date from "../../data/CalendarBlank.png";
import chat from "../../data/ChatCircleDots.png";
import forwardArrow from "../../data/ArrowRight.png";

export default function LatestNews() {
  return (
    <div className="md:text-md mt-10 text-sm lg:text-lg">
      <p className="py-5 text-center font-bold lg:text-2xl">Latest News</p>

      <div className="m-auto w-[95%] items-center justify-between space-y-5 pb-10 lg:flex lg:w-[85%] lg:gap-7 lg:space-y-0">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col items-center border border-[#057FCC] p-5 hover:border-[#DE0F04] md:p-5 lg:block "
          >
            <div className="mb-4 w-full ">
              <img src={blog.banner} alt="banner" />
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span>
                  <img src={admin} alt="icon" />
                </span>
                <span>{blog.poster}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <img src={date} alt="icon" />
                </span>
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <img src={chat} alt="icon" />
                </span>
                <span>{blog.comments}</span>
              </div>
            </div>
            <div className="py-3 font-semibold">{blog.title}</div>

            <div className="font-light">
              {blog.message.length < 50 ? (
                blog.message
              ) : (
                <>
                  {blog.message.split(" ").slice(0, 15).join(" ")}

                  <span className=" text-[#057FCC]"> ... </span>
                </>
              )}
            </div>

            <div className="mt-5">
              <button className="flex items-center gap-1 border border-[#FA8232] px-5 py-1 text-[#FA8232]">
                <span> READ MORE</span>{" "}
                <span>
                  <img src={forwardArrow} alt="icon" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
