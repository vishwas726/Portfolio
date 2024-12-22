import React from 'react'
import { Link, useLocation } from 'react-router'

const Footer = () => {
    let location = useLocation();
 
    let path = location.pathname.split("/")[1];
  return (

    <footer>



        <div className="max-w-[1200px] mx-auto px-5 mt-20 py-20">

        <div className="flex flex-col gap-y-10  md:flex-row mx-5 py-6 justify-between">
        <div className="flex space-x-2 items-center">
            {/* <img src="/Logo.png" alt="" className="translate-x-[16px] -translate-y-[5px] w-[40px] mix-blend-hard-light filter invert-[100%] sepia-[100%] saturate-[500%] hue-rotate-[200deg]" /> */}
            <img
              src="/Logo.png"
              alt=""
              className="translate-x-[16px] -translate-y-[5px] w-[60px] mix-blend-hard-light filter invert"
            />

            <span className="text-[20px] font-bold text-white">ishwas_726</span>
          </div>

          <div className="links grid gap-y-2 items-center   text-[#ffffff9d] md:grid-cols-2 xl:grid-cols-4">
            <Link to="/">
              <li
                className={`cursor-pointer transition-all duration-200 hover:text-blue-500  list-none px-4 text-[18px]`}
              >
                Home
              </li>
            </Link>
            <Link to="/skills">
              <li
                className={`cursor-pointer transition-all duration-200 hover:text-blue-500  list-none px-4 text-[18px]`}
              >
                Skills
              </li>
            </Link>
            <Link to="/projects">
              <li
                className={`cursor-pointer transition-all duration-200 hover:text-blue-500  list-none px-4 text-[18px]`}
              >
                Projects
              </li>
            </Link>
            <Link to="/about">
              <li
                className={`cursor-pointer transition-all duration-200 hover:text-blue-500  list-none px-4 text-[18px]`}
              >
                About me
              </li>
            </Link>
          </div>
          <li
                className={`text-[#ffffff9d] cursor-pointer transition-all duration-200 hover:text-blue-500 items-center flex list-none px-4 text-[18px]`}
              >
                © 2024 Vishwas, All Rights Reserved
              </li>
        </div>


        </div>



    </footer>
  )
}

export default Footer