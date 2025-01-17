import React from 'react';

const Work = () => {
  const workdata = [
    {
      id: 1,
      firm: "Articleship firm – S.R. Batliboi and Associates LLP (Member firm of EY Group)",
      position: "Intern-Statutory Audit TMT",
      duration: "April 2022 – Present",
      description: 
        [
          {
            id: 1,
            value: "Led audit procedures for key financial areas, including revenue, leases, and ESOPs, over multiple quarters for major companies with turnovers up to INR 35,000 Mn, and executed audits for fixed assets and financial controls."
          },
          {
            id: 2,
            value: "Automated IND AS 116 audit procedures using Alteryx for multiple clients, improving efficiency for financial impacts exceeding INR 25,000 Mn; leveraged Power BI to analyze cash collections across 120+ branches, mitigating risks."
          },
          {
            id: 3,
            value: "Conducted profitability and revenue benchmarking against industry standards, identifying growth opportunities for companies with turnovers up to INR 15,000 Mn."
          },
          {
            id: 4,
            value: "Identified and rectified accounting errors in revenue and inventory, ensuring accurate financial reporting; avoided inappropriate disclosures by analyzing omitted related-party transactions."
          },
          {
            id: 5,
            value: "Assisted in assignments for high-profile clients like PVR Ltd., PhysicsWallah, Shriram Automall, Orix, Micromax, and others, contributing to the accurate preparation of cash flow and fund flow statements for startups."
          }
        ]        
    }
  ];

  return (
    <div id="WorkExperience" className="w-full max-h-max  bg-gradient-to-b from-gray-800 to-black text-white py-20 md:py-8 ">
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