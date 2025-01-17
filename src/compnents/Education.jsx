import React from "react";

const Education = () => {
  const academicQualifications = [
    {
      id: 1,
      year: "Nov 2024",
      degree: "CA Final",
      board: "Institute of Chartered Accountants of India",
      percentage: "70.00 % ",
      remarks: "Exemption in all subjects"
    },
    {
      id: 2,
      year: "Nov 2021",
      degree: "CA Intermediate",
      board: "Institute of Chartered Accountants of India",
      percentage: "71.75%",
      remarks: "Exemption in all subjects"
    },
    {
      id: 3,
      year: "Nov 2020",
      degree: "CA Foundation",
      board: "Institute of Chartered Accountants of India",
      percentage: "81.75%",
      remarks: "Exemption in all subjects"
    },
    {
      id: 4,
      year: "Dec 2023",
      degree: "B.com A&F",
      board: "IGNOU, Open Learning",
      percentage: "70.83 %",
      remarks: "First Division"
    },
    {
      id: 5,
      year: "Mar 2020",
      degree: "Higher Secondary (ISC)",
      board: "St. Josephs Boys High School, Bangalore",
      percentage: "97.00%",
      remarks: "3rd in School"
    },
    {
      id: 6,
      year: "Mar 2018",
      degree: "Secondary (ICSE)",
      board: "St. Josephs Boys High School, Bangalore",
      percentage: "91.67%",
      remarks: "A+ Grade"
    }
  ];

  return (
    <div
      id="Education"
      className="w-full max-h-max  bg-gradient-to-b from-black to-gray-800 text-white py-28 md:py-8 scroll-mt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
            Education
          </p>
        </div>

        <div className="flex flex-col md:flex-wrap md:flex-row gap-6">
          {academicQualifications.map((qual) => (
            <div
              key={qual.id}
              className="w-full md:w-[48%] bg-gray-900 p-4 rounded-lg shadow-md border-l-4 border-yellow-400"
            >
              <h3 className="text-xl font-semibold">{qual.degree}</h3>
              <p className="text-gray-400">{qual.year}</p>
              <p className="text-gray-300">{qual.board || "N/A"}</p>
              <p className="text-yellow-300">Score: {qual.percentage}</p>
              <p className="text-sm text-gray-400">{qual.remarks}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
