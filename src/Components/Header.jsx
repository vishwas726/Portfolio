import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  let location = useLocation();

  let path = location.pathname.split("/")[1];

  const [headerPopup, setHeaderPopup] = useState(false);
  return (
    <div className=" text-white relative   ">
      <div
        className={`h idden HeaderPopup z-[100] ${
          headerPopup ? "block left-0" : "left-[-5000px]  "
        }  transition-all ease-in-out duration-200  absolute bg-[#000000e2]  h-[100vh]  w-[100%]`}
      >
        <div className="links gap-y-4 flex flex-col h-[100vh] justify-center items-center text-[#ffffff9d] ">
          <IoMdClose
            onClick={() => setHeaderPopup(false)}
            className="cursor-pointer absolute text-white text-[2rem] top-[3rem] opacity-80 right-[2rem]"
          />

          <Link to="/">
            <li
              onClick={() => setHeaderPopup(false)}
              className={`cursor-pointer transition-all duration-200 hover:text-blue-500 ${
                path === "" ? "text-blue-500" : ""
              } list-none px-4 text-[18px]`}
            >
              Home
            </li>
          </Link>

          <Link to="/skills">
            <li
              onClick={() => setHeaderPopup(false)}
              className={`cursor-pointer transition-all duration-200 hover:text-blue-500 ${
                path === "skills" ? "text-blue-500" : ""
              } list-none px-4 text-[18px]`}
            >
              Skills
            </li>
          </Link>

          <Link to="/Experience">
            <li
              onClick={() => setHeaderPopup(false)}
              className={`cursor-pointer transition-all duration-200 hover:text-blue-500 ${
                path === "Experience" ? "text-blue-500" : ""
              } list-none px-4 text-[18px]`}
            >
              Experience
            </li>
          </Link>

          <Link to="/projects">
            <li
              onClick={() => setHeaderPopup(false)}
              className={`cursor-pointer transition-all duration-200 hover:text-blue-500 ${
                path === "projects" ? "text-blue-500" : ""
              } list-none px-4 text-[18px]`}
            >
              Projects
            </li>
          </Link>
          <Link to="/about">
            <li
              onClick={() => setHeaderPopup(false)}
              className={`cursor-pointer transition-all duration-200 hover:text-blue-500 ${
                path === "about" ? "text-blue-500" : ""
              } list-none px-4 text-[18px]`}
            >
              About me
            </li>
          </Link>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex me-[18px] md:me-5 py-6 justify-between">
          <div className="flex items-center w-fit">
            {/* <img src="/Logo.png" alt="" className="translate-x-[16px] -translate-y-[5px] w-[40px] mix-blend-hard-light filter invert-[100%] sepia-[100%] saturate-[500%] hue-rotate-[200deg]" /> */}
            <img
              src="/Logo.png"
              alt=""
              className="translate-x-[14px] -translate-y-[5px] w-[60px] mix-blend-hard-light filter invert"
            />

            <span className="text-[20px] font-bold">ishwas_726</span>
          </div>

          <div className="links hidden justify-center items-center text-[#ffffff9d] md:flex">
            <Link to="/">
              <li
                className={`cursor-pointer transition-all duration-200 hover:text-blue-500 ${
                  path === "" ? "text-blue-500" : ""
                } list-none px-4 text-[18px]`}
              >
                Home
              </li>
            </Link>

            <Link to="/skills">
              <li
                className={`cursor-pointer transition-all duration-200 hover:text-blue-500 ${
                  path === "skills" ? "text-blue-500" : ""
                } list-none px-4 text-[18px]`}
              >
                Skills
              </li>
            </Link>

            <Link to="/Experience">
              <li
                className={`cursor-pointer transition-all duration-200 hover:text-blue-500 ${
                  path === "Experience" ? "text-blue-500" : ""
                } list-none px-4 text-[18px]`}
              >
                Experience
              </li>
            </Link>

            <Link to="/projects">
              <li
                className={`cursor-pointer transition-all duration-200 hover:text-blue-500 ${
                  path === "projects" ? "text-blue-500" : ""
                } list-none px-4 text-[18px]`}
              >
                Projects
              </li>
            </Link>
            <Link to="/about">
              <li
                className={`cursor-pointer transition-all duration-200 hover:text-blue-500 ${
                  path === "about" ? "text-blue-500" : ""
                } list-none px-4 text-[18px]`}
              >
                About me
              </li>
            </Link>
          </div>

          <a className="lg:block hidden" href="mailto:vishwaslandge2004@gmail.com?subject=Hiring Inquiry&body=Hi Vishwas, I am interested in discussing opportunities with you.">
            {" "}
            <div className="absolute group-hover:w-full w-0 transition-all duration-200 z-10 h-full left-0 top-0 bg-blue-600"></div>
            <button className=" group overflow-hidden relative w-[157px] h-[44px] border rounded-lg transition-all duration-200 hover:border-none hover:bg-[#5454d4]">
              <div className="absolute group-hover:w-full w-0 transition-all duration-200 z-10 h-full left-0 top-0 bg-blue-600"></div>
              <span className="z-20 relative"> Contact Me</span>
            </button>
          </a>
          <img
            src="/menu.svg"
            onClick={() => setHeaderPopup(true)}
            alt=""
            className=" md:hidden cursor-pointer w-[32px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
