import React from 'react'

import { FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMysql, SiMongodb, SiExpress } from 'react-icons/si'

const Skills = () => {
  return (
    <section id="skills" className="skills  mt-14 w-full relative pb-20">
    <div className="-z-30 absolute bg-gradient-to-r from-[#5454D4] to-[#2C2C6E] h-[100px] w-[500px] top-[2rem] opacity-20 blur-[70px] left-6 rotate-[-200deg]"></div>

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
  )
}

export default Skills