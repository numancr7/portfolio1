import React from "react";
import pic from "/profile-pic.png";
import { ReactTyped } from "react-typed";

import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className=" body md:flex  mt-5 container  shadow-md   md:gap-10 px-5 md:px-10">
        <div className=" md:w-[65vw] w-[90vw] md:py-20 ">
          <div className="">
            <h2 className="text-xl md:text-2xl font-bold">
              Welcome in my community
            </h2>
            <h4>
              <span className="font-semibold">Hello</span>, I'm a{" "}
              <ReactTyped
                className="text-green-500 font-bold"
                strings={[
                  "NextJs Developer",
                  "MERN Developer",
                  "Coder",
                  "Backend Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />{" "}
            </h4>
          </div>
          <br />
          <br />
          <div>
            <p className="text-sm md:text-lg">
              I'm a student of Artificial Intelligence in The Islamia University
              of Bhawalpur in <span className="text-green-500">Pakistan.</span>
              I have 2 years of experience in the field of Web development.
            </p>
          </div>
          <br />
          <br />
          <div className="md:flex md:flex-row flex-col flex gap-10 md:gap-20">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">
                Available on
              </h1>
              <br />
              <ul className="flex gap-3 md:gap-7">
                <li>
                  <a
                    target="_blank"
                    className="font-semibold text-2xl md:text-4xl text-blue-500"
                    href="https://www.linkedin.com/in/nouman-raza-3b93b92a7/"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="font-semibold text-2xl md:text-4xl"
                    href="https://github.com/numancr7"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="font-semibold text-2xl text-green-600 md:text-4xl"
                    href="https://web.whatsapp.com/+923005105824"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="font-semibold text-2xl md:text-4xl text-slate-700"
                    href="https://www.tiktok.com/@nomansofficial"
                  >
                    <FaTiktok />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-xl  md:text-2xl font-semibold">
                currently working on
              </h1>
              <br />
              <ul className="flex gap-3 md:gap-7">
                <li>
                  <a
                    className="font-semibold text-2xl md:text-4xl text-green-700"
                    target="_blank"
                    href="https://www.mongodb.com"
                  >
                    <SiMongodb />
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold text-2xl md:text-4xl"
                    target="_blank"
                    href="https://expressjs.com"
                  >
                    <SiExpress />
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold text-2xl md:text-4xl text-blue-400"
                    target="_blank"
                    href="https://react.dev"
                  >
                    <FaReact />
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold text-2xl md:text-4xl text-green-600"
                    target="_blank"
                    href="https://nodejs.org"
                  >
                    <FaNodeJs />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:w-[35vw]  m-10 md:mt-24 md:ml-44 ">
          <img src={pic} alt="" className="h-80 " />
        </div>
      </div>
    </>
  );
};

export default Home;
