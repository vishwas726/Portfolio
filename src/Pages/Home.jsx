import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiExpress } from "react-icons/si";
import Contact from "../Components/Contact";

const Home = () => {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    setPopup(true);
  }, []);

  return (
    <div className=" relative z-[1] w-full">
      {/* <div className={`absolute p-5 ${popup ? "flex" :"hidden"} flex-col z-50 top-[-90px] h-[500px] mx-auto w-[80%] bg-white rounded-lg right-0 left-0`}>
        <h1 className="sm:leading-[4.8rem] text-blue-600 font-bold text-[54px] leading-[4rem] sm:text-[80px]">
          Welcome,
          <br />i am working on it..

         
        </h1> <button className="bg-blue-500 text-white w-fit px-4 py-2 mt-10 text-xl mx-auto " onClick={()=>setPopup(false)} >Cancel</button>
      </div> */}

      <div className="absolute -top-10 -z-10 opacity-20 left-0 md:left-[10rem] blur-[70px] rotate-[-40deg] w-[267px] sm:h-[900px] h-[400px] rounded-full bg-gradient-to-r from-[#5454D4] to-[#2C2C6E]"></div>

      <div className="mt-14">
        <section className="hero w-full overflow-y -hidden  ">
          <div className="max-w-[1200px] justify-between flex md:px-5 mx-5 lg:mx-auto flex-col-reverse  lg:flex-row">
            <div className="left mt-10  text-white">
              <h1 className="sm:leading-[4.8rem] font-bold text-[54px] leading-[4rem] sm:text-[80px]">
                Build Your <br />
                Awesome <br />
                Plateform <br />
              </h1>

              <p className="max-w-[536px] mt-5 text-[20px] text-[#ffffffb6]">
                I am a developer skilled in full-stack web development, offering
                services from front-end design to back-end solutions, ensuring
                high-quality and efficient results.
              </p>
              <a href="mailto:vishwaslandge2004@gmail.com?subject=Hiring Inquiry&body=Hi Vishwas, I am interested in discussing opportunities with you.">
                {" "}
                <div className="absolute group-hover:w-full w-0 transition-all duration-200 z-10 h-full left-0 top-0 bg-blue-600"></div>
                <button className="relative overflow-hidden group transition-all duration-200 mt-10 w-[204px] text-[20px] font-bold rounded-md h-[58px] text-white bg-[#5454D4] flex justify-center items-center ">
                  {" "}
                  <p className="z-20">Hire Me</p>{" "}
                  <span className="z-20">
                    <img
                      src="/Icon1.svg"
                      alt=""
                      className="ps-2 group-hover:rotate-45 group-hover:ps-4 group-hover:-translate-y-1 transition-all duration-200"
                    />
                  </span>
                </button>{" "}
              </a>
            </div>
            <div className="px-2 mx-auto w-[450px] sm:w-[500px] max-w-full right relative md:w-[660px] xl:w-[670px]  h-[552px] bg- gray-200 text-center">
              <img
                src="/Vector1.svg"
                alt=""
                className="absolute animate-bounce top-0 left-[-4rem] lg:left-[0rem]"
              />
              <img
                src="/Vector2.svg"
                alt=""
                className="absolute animate-ping  right-0 top-0"
              />
              <img
                src="/Vector3.svg"
                alt=""
                className="absolute animate-pulse bottom-[54px] left-0"
              />
              <img
                src="/Vector4.svg"
                alt=""
                className="absolute animate-bounce  bottom-0 right-0"
              />

              <img
                src="/my2.png"
                alt=""
                className=" lg:left-[78px] left-[-30px] md:left-[5rem] min-w-[440px] z-30 top-[-100px]  absolute rounded-full"
              />
              <img
                src="/Rectangle.svg"
                alt=""
                className="absolute z-20 top-[-43px] left-0 right-0 mx-auto xl:left-[102px] w-auto"
              />

              <div className="bg-red-400 rounded-full max-w-full mx-auto left-0 right-0  overflow-hidden absolute w-[400px]  sm:max-w-[400px] sm:h- [400px] z-20 top-[-14px] md:right- [80px]  ">
                <img src="/ProfileBox.svg" alt="" className="h-full w-full scale-150" />
              </div>
              
            </div>
          </div>
        </section>

        <section id="skills" className="skills mt-28 w-full relative pb-20">
          <img
            src="/Vector1.svg"
            className="absolute -top-10 left-20 "
            alt=""
          />
          <img
            src="/Vector4.svg"
            className="absolute rotate-12 right-20 top-14 w-[30px]"
            alt=""
          />
          <img
            src="/Vector4.svg"
            className="absolute rotate-12 left-10 bottom-0 w-[30px]"
            alt=""
          />

          <div className="max-w-[1200px] mx-5 xl:mx-auto text-white">
            <h2 className="mx-auto text-center font-bold text-[45px] sm:text-[62px]">
              The Skills I have
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16">
              <div className="text-center p-4 rounded-md hover:bg-[#ffffff07] transition-all duration-200">
                <div className="flex justify-center items-center mx-auto w-[60px] h-[60px] rounded-full bg-[#ff00002e]">
                  <FaHtml5 className="text-red-600 text-3xl" />
                </div>
                <h3 className="text-[28px] mt-5">HTML</h3>
                <p className="mt-2 text-[20px] text-[#ffffffa3] max-w-[300px] mx-auto">
                  Build the structure of modern and responsive websites.
                </p>
              </div>

              <div className="text-center p-4 rounded-md hover:bg-[#ffffff07] transition-all duration-200">
                <div className="flex justify-center items-center mx-auto w-[60px] h-[60px] rounded-full bg-[#0000ff2e]">
                  <FaCss3Alt className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-[28px] mt-5">CSS</h3>
                <p className="mt-2 text-[20px] text-[#ffffffa3] max-w-[300px] mx-auto">
                  Style and create visually engaging layouts for websites.
                </p>
              </div>

              <div className="text-center p-4 rounded-md hover:bg-[#ffffff07] transition-all duration-200">
                <div className="flex justify-center items-center mx-auto w-[60px] h-[60px] rounded-full bg-[#f0db4f2e]">
                  <FaJsSquare className="text-[#f0db4f] text-3xl" />
                </div>
                <h3 className="text-[28px] mt-5">JavaScript</h3>
                <p className="mt-2 text-[20px] text-[#ffffffa3] max-w-[300px] mx-auto">
                  Add interactivity and dynamic features to web applications.
                </p>
              </div>

              <div className="text-center p-4 rounded-md hover:bg-[#ffffff07] transition-all duration-200">
                <div className="flex justify-center items-center mx-auto w-[60px] h-[60px] rounded-full bg-[#4F5D952e]">
                  <FaPhp className="text-[#4F5D95] text-3xl" />
                </div>
                <h3 className="text-[28px] mt-5">PHP</h3>
                <p className="mt-2 text-[20px] text-[#ffffffa3] max-w-[300px] mx-auto">
                  Develop powerful server-side scripts and dynamic websites.
                </p>
              </div>

              <div className="text-center p-4 rounded-md hover:bg-[#ffffff07] transition-all duration-200">
                <div className="flex justify-center items-center mx-auto w-[60px] h-[60px] rounded-full bg-[#4479A12e]">
                  <SiMysql className="text-[#4479A1] text-3xl" />
                </div>
                <h3 className="text-[28px] mt-5">MySQL</h3>
                <p className="mt-2 text-[20px] text-[#ffffffa3] max-w-[300px] mx-auto">
                  Create and manage relational databases with ease.
                </p>
              </div>

              <div className="text-center p-4 rounded-md hover:bg-[#ffffff07] transition-all duration-200">
                <div className="flex justify-center items-center mx-auto w-[60px] h-[60px] rounded-full bg-[#47A2482e]">
                  <SiMongodb className="text-[#47A248] text-3xl" />
                </div>
                <h3 className="text-[28px] mt-5">MongoDB</h3>
                <p className="mt-2 text-[20px] text-[#ffffffa3] max-w-[300px] mx-auto">
                  Design and manage NoSQL databases for scalable applications.
                </p>
              </div>

              <div className="text-center p-4 rounded-md hover:bg-[#ffffff07] transition-all duration-200">
                <div className="flex justify-center items-center mx-auto w-[60px] h-[60px] rounded-full bg-[#ffffff91]">
                  <SiExpress className="text-black text-3xl" />
                </div>
                <h3 className="text-[28px] mt-5">Express.js</h3>
                <p className="mt-2 text-[20px] text-[#ffffffa3] max-w-[300px] mx-auto">
                  Develop robust APIs and efficient server-side applications.
                </p>
              </div>

              <div className="text-center p-4 rounded-md hover:bg-[#ffffff07] transition-all duration-200">
                <div className="flex justify-center items-center mx-auto w-[60px] h-[60px] rounded-full bg-[#61DAFB2e]">
                  <FaReact className="text-[#61DAFB] text-3xl" />
                </div>
                <h3 className="text-[28px] mt-5">React.js</h3>
                <p className="mt-2 text-[20px] text-[#ffffffa3] max-w-[300px] mx-auto">
                  Build dynamic, responsive, and scalable web applications.
                </p>
              </div>

              <div className="text-center p-4 rounded-md hover:bg-[#ffffff07] transition-all duration-200">
                <div className="flex justify-center items-center mx-auto w-[60px] h-[60px] rounded-full bg-[#68A0632e]">
                  <FaNodeJs className="text-[#68A063] text-3xl" />
                </div>
                <h3 className="text-[28px] mt-5">Node.js</h3>
                <p className="mt-2 text-[20px] text-[#ffffffa3] max-w-[300px] mx-auto">
                  Create fast, scalable, and efficient backend solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="MyProjects mt-28 w-full relative pb-20">
          <img
            src="/Vector2.svg"
            alt=""
            className="absolute right-0 md:right-[10%] top-0 md:-top-4"
          />
          <img
            src="/Vector1.svg"
            alt=""
            className="absolute left-0 md:left-[10%] bottom-0 md:-bottom-4"
          />

          <div className="absolute -top-10 z-10 opacity-20 left-0 md:left-[10rem] blur-[70px] rotate-[-40deg] w-[267px] sm:h-[300px] h-[200px] rounded-full bg-gradient-to-r from-[#5454D4] to-[#2C2C6E]"></div>

          <div className="max-w-[1200px] mx-6 xl:mx-auto text-white">
            <h2 className="mx-auto text-center font-bold text-[45px] sm:text-[62px]">
              My Awesome Projects
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 gap-y-10 w-full mt-20">
              <div className="projectWrapper before:contrast-[''] before:absolute before:bg-[#0000ffaf] group before:hover:w-full before:transition-all before:duration-200 relative before:opacity-30 before:w-0 before:top-0 before:left-0 before:h-full col-span-2">
                <div className="projectcontent absolute bg-[#00000054] w-full h-full p-5 ">
                  <h5 className="font-bold text-[30px] md:text-[46px]">
                    Vacation Rental Platform
                  </h5>
                  <p></p>
                  <button className="bg-blue-600 mt-6 font-bold px-4 py-2 rounded-lg">
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
                  <h5 className="font-bold text-[30px] md:text-[46px]">
                    Trading Plateform
                  </h5>
                  <p></p>
                  <button className="bg-blue-600 mt-6 font-bold px-4 py-2 rounded-lg">
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
                  <h5 className="font-bold text-[30px] md:text-[46px]">
                    Interactive Online Store
                  </h5>
                  <p></p>
                  <button className="bg-blue-600 mt-6 font-bold px-4 py-2 rounded-lg">
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
                  <h5 className="font-bold text-[30px] md:text-[46px]">
                    Travel Together Platform
                  </h5>
                  <p></p>
                  <button className="bg-blue-600 mt-6 font-bold px-4 py-2 rounded-lg">
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
                  <h5 className="font-bold text-[30px] md:text-[46px]">
                    Educational Institution Website
                  </h5>
                  <p></p>
                  <button className="bg-blue-600 mt-6 font-bold px-4 py-2 rounded-lg">
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
                  <h5 className="font-bold text-[30px] md:text-[46px]">
                    Interactive Music Player
                  </h5>
                  <p></p>
                  <button className="bg-blue-600 mt-6 font-bold px-4 py-2 rounded-lg">
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
        </section>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
