import React from 'react'


const Contact = () => {
  return (
 
    <section className="Contact relative mt-[7rem] py-28 bg-[#1e1e207a]">
    <img src="/Vector3.svg" alt=""  className="absolute bottom-0 right-5"/>
    <img src="/Vector2.svg" alt=""  className="absolute top-10 left-10"/>

    <div className=" flex flex-col md:flex-row items-center justify-evenly max-w-[1200px]  mx-6 xl:mx-auto text-white">
      <p className="font-bold font-Passion text-[2rem] leading-[2rem] md:leading-normal md:text-[3.6rem]">
        Contact me for the services <br />
        you want to Use
      </p>

      <a href="mailto:vishwaslandge2004@gmail.com?subject=Hiring Inquiry&body=Hi Vishwas, I am interested in discussing opportunities with you."> <div className="absolute group-hover:w-full w-0 transition-all duration-200 z-10 h-full left-0 top-0 bg-blue-600"></div>
      <button className="bg-blue-500 mt-6 md:mt-0 w-fit font-bold rounded-md h-fit py-3 px-4">Contact me</button></a>
    </div>
  </section>
  

  )
}

export default Contact