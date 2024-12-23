import React from "react";
import Contact from "../Components/Contact";

const Projects = () => {
  return (
    <section className="MyProects mt-10 w-full relative pb-20">
      <div className="absolute -top-10 z-10 opacity-20 left-0 md:left-[10rem] blur-[70px] rotate-[-40deg] w-[267px] sm:h-[300px] h-[200px] rounded-full bg-gradient-to-r from-[#5454D4] to-[#2C2C6E]"></div>

      <div className="max-w-[1200px] mx-6 xl:mx-auto text-white">
        <h2 className="mx-auto text-center font-bold text-[45px] sm:text-[62px]">
          My Awesome Projects
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 gap-y-10 w-full mt-20">
          <div className="projectWrapper before:contrast-[''] before:absolute before:bg-[#0000ffaf] group before:hover:w-full before:transition-all before:duration-200 relative before:opacity-30 before:w-0 before:top-0 before:left-0 before:h-full col-span-2">
            <div className="projectcontent absolute bg-[#00000054] w-full h-full p-5 bg-[#00000054]">
              <h5 className="leading-[1.7rem] md:leading-normal font-bold text-[30px] md:text-[46px]">
                Vacation Rental Platform
              </h5>
              <p></p>
              <button className="bg-blue-600 mt-2 md:mt-6 font-bold px-4 py-2 rounded-lg">
                See More
              </button>
            </div>
            <img
              src="/travle.png"
              alt=""
              className="cursor-pointer transition-all duration-200 rounded-lg w-full"
            />

            <p className="font-bold text-[0px] transition-all duration-200 group-hover:text-[10rem] md:group-hover:text-[18rem] font-Passion absolute top-0 right-20">
              01
            </p>
          </div>

          <div className="sm:leading-[4.8rem] font-bold text-[54px] leading-[4rem] sm:text-[80px]"></div>
          <div className=""></div>
          <div className="projectWrapper before:contrast-[''] before:absolute before:bg-[#0000ffaf] group before:hover:w-full before:transition-all before:duration-200 relative before:opacity-30 before:w-0 before:top-0 before:left-0 before:h-full col-span-2 mt-10">
            <div className="projectcontent absolute bg-[#00000054] w-full h-full p-5 ">
              <h5 className="leading-[1.7rem] md:leading-normal font-bold text-[30px] md:text-[46px]">
                Trading Plateform
              </h5>
              <p></p>
              <button className="bg-blue-600 mt-2 md:mt-6 font-bold px-4 py-2 rounded-lg">
                See More
              </button>
            </div>
            <img
              src="/zerodha.png"
              alt=""
              className="cursor-pointer transition-all duration-200 rounded-lg w-full"
            />

            <p className="font-bold text-[0px] transition-all duration-200 group-hover:text-[10rem] md:group-hover:text-[18rem] font-Passion absolute top-0 right-20">
              02
            </p>
          </div>

          <div className="projectWrapper before:contrast-[''] before:absolute before:bg-[#0000ffaf] group before:hover:w-full before:transition-all before:duration-200 relative before:opacity-30 before:w-0 before:top-0 before:left-0 before:h-full col-span-2 mt-20">
            <div className="projectcontent absolute bg-[#00000054] w-full h-full p-5 ">
              <h5 className="leading-[1.7rem] md:leading-normal font-bold text-[30px] md:text-[46px]">
                Interactive Online Store
              </h5>
              <p></p>
              <button className="bg-blue-600 mt-2 md:mt-6 font-bold px-4 py-2 rounded-lg">
                See More
              </button>
            </div>
            <img
              src="/shoping.png"
              alt=""
              className="cursor-pointer transition-all duration-200 rounded-lg w-full"
            />
            <p className="font-bold text-[0px] transition-all duration-200 group-hover:text-[10rem] md:group-hover:text-[18rem] font-Passion absolute top-0 right-20">
              03
            </p>
          </div>
          <div className=""></div>
          <div className=""></div>
          <div className="projectWrapper before:contrast-[''] before:absolute before:bg-[#0000ffaf] group before:hover:w-full before:transition-all before:duration-200 relative before:opacity-30 before:w-0 before:top-0 before:left-0 before:h-full col-span-2 mt-10">
            <div className="projectcontent absolute bg-[#00000054] w-full h-full p-5 ">
              <h5 className="leading-[1.7rem] md:leading-normal font-bold text-[30px] md:text-[46px]">
                Travel Together Platform
              </h5>
              <p></p>
              <button className="bg-blue-600 mt-2 md:mt-6 font-bold px-4 py-2 rounded-lg">
                See More
              </button>
            </div>
            <img
              src="/gettogether.png"
              alt=""
              className="cursor-pointer transition-all duration-200 rounded-lg w-full"
            />
            <p className="font-bold text-[0px] transition-all duration-200 group-hover:text-[10rem] md:group-hover:text-[18rem] font-Passion absolute top-0 right-20">
              04
            </p>
          </div>

          <div className="projectWrapper before:contrast-[''] before:absolute before:bg-[#0000ffaf] group before:hover:w-full before:transition-all before:duration-200 relative before:opacity-30 before:w-0 before:top-0 before:left-0 before:h-full col-span-2 mt-20">
            <div className="projectcontent absolute bg-[#00000054] w-full h-full p-5 ">
              <h5 className="leading-[1.7rem] md:leading-normal font-bold text-[30px] md:text-[46px]">
                Educational Institution Website
              </h5>
              <p></p>
              <button className="bg-blue-600 mt-2 md:mt-6 font-bold px-4 py-2 rounded-lg">
                See More
              </button>
            </div>
            <img
              src="/College.png"
              alt=""
              className="cursor-pointer transition-all duration-200 rounded-lg w-full"
            />
            <p className="font-bold text-[0px] transition-all duration-200 group-hover:text-[10rem] md:group-hover:text-[18rem] font-Passion absolute top-0 right-20">
              05
            </p>
          </div>

          <div className=""></div>
          <div className=""></div>
          <div className="projectWrapper before:contrast-[''] before:absolute before:bg-[#0000ffaf] group before:hover:w-full before:transition-all before:duration-200 relative before:opacity-30 before:w-0 before:top-0 before:left-0 before:h-full col-span-2 mt-10">
            <div className="projectcontent absolute bg-[#00000054] w-full h-full p-5 ">
              <h5 className="leading-[1.7rem] md:leading-normal font-bold text-[30px] md:text-[46px]">
                Interactive Music Player
              </h5>
              <p></p>
              <button className="bg-blue-600 mt-2 md:mt-6 font-bold px-4 py-2 rounded-lg">
                See More
              </button>
            </div>
            <img
              src="/Music.png"
              alt=""
              className="cursor-pointer transition-all duration-200 rounded-lg w-full"
            />

            <p className="font-bold text-[0px] transition-all duration-200 group-hover:text-[10rem] md:group-hover:text-[18rem] font-Passion absolute top-0 right-20">
              06
            </p>
          </div>
        </div>
      </div>
      <Contact/>
    </section>
  );
};

export default Projects;
