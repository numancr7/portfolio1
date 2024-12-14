import React from "react";

const About = () => {
  return (
    <div name = "About" className=" body  mt-5 container  shadow-md   md:gap-10 px-5 md:px-10">
      <div className="md:w-[70vw] w-[80vw] items-center justify-center m-auto border px-10">
      <h1 className="font-bold text-xl md:text-3xl my-5">About</h1>
      <p className="text-sm md:text-lg">
        I'm a student of Artificial Intelligence in The Islamia University of
        Bhawalpur in <span className="text-green-500">Pakistan.</span>I have 2
        years of experience in the field of Web development.
      </p>
      <br />

      <h1 className="text-green-600 font-semibold  text-xl md:text-2xl">
        Education & Training
      </h1>
      <p className="text-sm md:text-lg">
        I have pursued self-learning in web development, alongside structured
        training through courses purchased from Nexus Berry Lahore. These
        courses have helped me gain in-depth knowledge of front-end and back-end
        technologies. For more information on the courses I have taken, you can
        visit{" "}
        <a href="https://www.nexusberry.com" className="text-blue-500" target="_blank">
          Nexus Berry Lahore
        </a>
        .
      </p>
      <br />

      <h1 className="text-green-600 font-semibold  text-xl md:text-2xl">
        Skills & Expertise
      </h1>
      <p className="text-sm md:text-lg">
        I have expertise in front-end and back-end web development, with skills
        in HTML, CSS, JavaScript, and React. I am proficient in building
        responsive and user-friendly websites, ensuring cross-browser
        compatibility and optimizing performance. On the back-end, I work with
        Node.js and Express to create robust server-side applications. I also
        have experience with databases like MongoDB.
      </p>
      <br />

      <h1 className="text-green-600 font-semibold  text-xl md:text-2xl">
        Professional Experience
      </h1>
      <p className="text-sm md:text-lg">
        I have gained professional experience by working on various web
        development projects, where I successfully built and deployed responsive
        websites for clients. My expertise includes front-end development using
        HTML, CSS, and JavaScript, as well as back-end development with Node.js.
        I have collaborated with clients to understand their needs, ensuring
        that projects were delivered on time and met their expectations.
      </p>
      <br />

      <h1 className="text-green-600 font-semibold  text-xl md:text-2xl">
        Achievements & Awards
      </h1>
      <p className="text-sm md:text-lg">
        I have built and launched my first responsive website and enrolled in BS
        (AI) at IUB Bahawalpur. I have learned HTML, CSS, JavaScript, and basic
        React. I also delivered my first website with positive client feedback
        and earned beginner-level certificates in web development. Additionally,
        I have contributed by helping beginners in online coding forums.
      </p>
      <br />

      <h1 className="text-green-600 font-semibold  text-xl md:text-2xl">
        Goals
      </h1>
      <p className="text-sm md:text-lg">
        I am a BS (AI) student at IUB Bahawalpur with 2 years of web development
        experience. Goals: Build a strong portfolio with advanced tools like
        Next.js. Work with clients to deliver quality projects and grow my
        income. Specialize in a niche like AI-powered websites or e-commerce.
        Start a small web development agency and become a trusted expert.
      </p>
      <br />
      </div>
    </div>
  );
};

export default About;
