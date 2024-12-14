import React from "react";
import pic2 from "/Portfolio.jpg";
import { ReactTyped } from "react-typed";

import { FaGithub, FaTiktok, FaLinkedin, FaWhatsapp, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Home = () => {
  return (
    <div 
      name="Home" 
      className="body flex flex-col md:flex-row items-center mt-5 shadow-md px-5 md:px-10 space-y-10 md:space-y-0 md:gap-10"
    >
      {/* Left Section */}
      <div className="md:flex-1 space-y-6">
        <div>
          <h2 className="text-xl md:text-3xl font-bold">Welcome to my community</h2>
          <h4 className="text-lg md:text-xl">
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
            />
          </h4>
        </div>

        <p className="text-sm md:text-lg leading-relaxed">
          I'm a student of Artificial Intelligence at The Islamia University of Bhawalpur in{" "}
          <span className="text-green-500">Pakistan.</span> I have 2 years of experience in web development.
        </p>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* Social Links */}
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">Available on</h1>
            <ul className="flex gap-5 md:gap-7 mt-3">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-3xl text-blue-500"
                  href="https://www.linkedin.com/in/nouman-raza-3b93b92a7/"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-3xl"
                  href="https://github.com/numancr7"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-3xl text-green-600"
                  href="https://web.whatsapp.com/+923005105824"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-3xl text-slate-700"
                  href="https://www.tiktok.com/@nomansofficial"
                >
                  <FaTiktok />
                </a>
              </li>
            </ul>
          </div>

          {/* Currently Working On */}
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">Currently working on</h1>
            <ul className="flex gap-5 md:gap-7 mt-3">
              <li>
                <a
                  className="font-semibold text-3xl text-green-700"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.mongodb.com"
                >
                  <SiMongodb />
                </a>
              </li>
              <li>
                <a
                  className="font-semibold text-3xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://expressjs.com"
                >
                  <SiExpress />
                </a>
              </li>
              <li>
                <a
                  className="font-semibold text-3xl text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://react.dev"
                >
                  <FaReact />
                </a>
              </li>
              <li>
                <a
                  className="font-semibold text-3xl text-green-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://nodejs.org"
                >
                  <FaNodeJs />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:flex-1 flex justify-center">
        <img
          src={pic2}
          alt="Portfolio"
          className="h-52 w-52 md:h-80 md:w-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
