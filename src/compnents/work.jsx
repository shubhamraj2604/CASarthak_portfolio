import React from 'react';

const Work = () => {
  const workdata = [
    {
      id: 1,
      firm: "Articleship firm – S.R. Batliboi and Associates LLP (Member firm of EY Group)",
      position: "Intern-Statutory Audit TMT",
      duration: "April 2022 – Present",
      description: [
        { id: 101, value: "Identified an error in an accounting estimate of provisions with the help of the Data Analytics tool Alteryx, having a financial impact of INR 12 Mn." },
        { id: 102, value: "Automated verification of IND AS 116 through Alteryx, covering 5 clients and 250+ leases." },
        { id: 103, value: "Identified operational delays in cash collection for 3 specific branches out of 150+ branches using Power BI." },
        { id: 104, value: "Assisted, coordinated, and executed various assignments as part of a team for clients like PVR Ltd , PhysicsWallah Limited, Shriram Automall India Limited, Orix, Micromax, Park+ and Pickr." }
      ]
    }
  ];

  return (
    <div id="WorkExperience" className="w-full  md:h-screen bg-gradient-to-b from-gray-800 to-black text-white py-8 ">
      <div className="max-w-screen-lg flex flex-col p-4 mx-auto justify-center w-full h-screen ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500">Work Experience</p>
        </div>

        <div className="flex flex-col gap-6 ">
          {workdata.map((mat) => (
            <div key={mat.id} className="w-full md:w-[80%] bg-gray-900 p-4 rounded-lg shadow-md border-l-4 border-yellow-400">
              <div className="flex flex-col items-center mb-4">
                <h2 className="text-xl font-semibold">{mat.firm}</h2>
                <p className="text-sm text-gray-400">{mat.duration}</p>
                <p className="text-md font-medium">{mat.position}</p>
              </div>

              <div className="pl-6">
                <ul className="list-disc text-gray-300">
                  {mat.description.map((desc) => (
                    <li key={desc.id} className="mb-2">
                      {desc.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;