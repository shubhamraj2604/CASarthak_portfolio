import React from "react";

const Position = () => {
  const pos = [
    {
      id: 1,
      position: "Logistics head Phenomenon",
      year: 2019,
      description:
        "Spearheaded Bangalore's largest student-organized cultural festival, managing 20 food stalls, 30 game stalls and coordinating an event with 15,000+ attendees, which featuring international artist Nucleya ",
    },
    {
      id: 2,
      position: "Project Leader-Cosmea",
      year: 2022 + " and " + 2021,
      description:
        "Organised “THE BAZAAR CHALLENGE” during corona lockdown. It was a paper trading competition envisioned to inculcate the habit of monitoring the market among the youth.350+participants took the challenge.",
    },
    {
      id: 3,
      position: " Organizer- JGPL",
      year: 2014 + "-" +2019,
      description:
        "Independently organized annual U-21 cricket tournament for 5 consecutive years, managing a budget of INR 1.5 Mn and attracting 100+ participants each year ",
    },
    {
      id: 4,
      position: "Rapporteur in Model United Nations '19",
      year: 2019,
      description:
        "Moderated the proceedings of Special Political and Decolonization Committee over 3 days of the conference with over 100 participants debating in the committee.",
    },
  ];

  return (
    <div
      name="position"
      className="w-full max-h bg-gradient-to-b from-black to-gray-800 text-white py-8"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
            POSITIONS OF RESPONSIBILITY
          </p>
        </div>

        <div className="flex flex-col md:flex-wrap md:flex-row gap-6">
          {pos.map(({ id, position, year, description }) => (
            <div
              key={id}
              className={`w-full md:w-[48%] bg-gray-900 p-4 rounded-lg shadow-md border-l-4 ${
                id === 3 || id === 4 ? "border-yellow-400" : "border-yellow-400"
              }`}
            >
              <h3
                className={`p-2 text-2xl ${
                  id === 3 || id === 4 ? "text-xl" : ""
                }`}
              >
                {position}
              </h3>
              <p className="p-2 text-md text-gray-500">{year}</p>
              <p className="p-2 text-lg text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Position;
