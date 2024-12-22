import React from "react";
import Header from "../Components/Header";
import Contact from "../Components/Contact";

const About = () => {
  return (
    <>
      <div className="text-white mt-10 relative">
        <div className="absolute bg-gradient-to-tr from-blue-600 to-blue-900 opacity-20 rotate-[-100deg] rounded-full blur-[90px] -z-30 top-[0px] sm:top-[0]  w-[200px] right-2 h-[100px] sm:h-[100px]"></div>
        <div className="max-w-[1200px] px-5  mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Image Section */}
            <img
              src="/about.jpg"
              className="w-full mx-auto max-w-full sm:max-w-[400px] object-cover rounded-lg"
              alt="About Vishwas"
            />

            {/* Content Section */}
            <div>
              {/* Introduction */}
              <p>
                Hi there! I’m <strong>Vishwas Landge</strong>, a passionate
                Full-Stack Developer and a final-year Computer Science and
                Engineering student at MSS College. My academic journey has been
                driven by curiosity, dedication, and a love for problem-solving.
                Along the way, I’ve developed a strong foundation in{" "}
                <strong>Data Structures and Algorithms</strong>, complemented by
                hands-on experience in web development and software engineering.
              </p>

              {/* Academic Path */}
              <p className="mt-6">
                <strong>My Academic Path:</strong>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    <strong>Bachelor of Technology (B.Tech)</strong> in Computer
                    Science and Engineering
                    <br />
                    MSS College | 2022 – Present
                    <br />
                    Currently in my final year, diving deep into advanced topics
                    like system design, backend development, and full-stack
                    applications.
                  </li>
                  <li className="mt-4">
                    <strong>Diploma in Computer Science</strong>
                    <br />
                    Government Polytechnic Jalna | 2019 – 2022 | CGPA: 7.9
                    <br />
                    My diploma years were transformative, providing a strong
                    technical foundation and practical skills that sparked my
                    interest in programming and development.
                  </li>
                  <li className="mt-4">
                    <strong>Secondary School</strong>
                    <br />
                    R.H.V School, Jalna | 2015 – 2019 | Percentage: 73%
                    <br />
                    Developed a disciplined approach to learning and discovered
                    my love for technology.
                  </li>
                </ul>
              </p>

              {/* Expertise */}
            </div>
          </div>
          <p className="mt-6">
            <br />
            With a solid educational background and a drive to innovate, I
            specialize in creating seamless and user-friendly web applications.
            <br />
            <strong>Key Expertise:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>
                <strong>Frontend Development:</strong> HTML5, CSS3, JavaScript,
                Bootstrap
              </li>
              <li>
                <strong>Backend Development:</strong> Node.js, PHP, Express.js
              </li>
              <li>
                <strong>Databases:</strong> MySQL, MongoDB
              </li>
              <li>
                <strong>Problem Solving:</strong> Over 200 challenges solved on
                LeetCode
              </li>
            </ul>
          </p>
        </div>
      </div>
      <Contact/>
    </>
  );
};

export default About;
