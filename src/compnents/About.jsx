import React from "react";

const About = () => {
  return (
    <div
      id="About Me"
      className="w-full  max-h md:h-screen bg-gradient-to-b from-gray-800 to-black text-white scroll-mt-20"
    >
      <div className="max-w-screen-lg flex flex-col p-4 mx-auto justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
          Welcome to my website! I'm Sarthak Modi, an Article Assistant in EY's
          Audit Department, where I specialize in auditing, financial analysis,
          and data analytics. What drives me is the thrill of uncovering
          business insights through numbers and data. I take pride in leveraging
          cutting-edge tools like Alteryx and Power BI along with traditional
          Microsoft tools like Excel,Word and Powerpoint to deliver accurate and
          timely financial insights, focusing on critical areas such as revenue
          recognition and audit analytics.
        </p>
        <br />
        <p className="text-xl">
          Continuous improvement is at the core of my approach. I'm always
          seeking ways to enhance processes, drive efficiency, and add value to
          my organization. My long-term goal is to make a meaningful impact by
          combining my passion for data-driven financial analysis with my
          skills, ultimately delivering value to the teams and businesses I
          collaborate with."
        </p>
      </div>
    </div>
  );
};

export default About;
