import React from 'react'

const achievements = () => {
    const achievements=[
        {
            id: 1,
            title: "Academic Acheivements",
            description:[
                "  Honoured with BRAGANZA AWARD for Best All-Rounder in ISC 19-20 ",
                "Honoured with PRINCIPALS AWARD for 3rd Highest Marks in ISC COMMERCE 19-20 ",
                "Honoured with AWARD for securing perfect score in MATHEMATICS and COMMERCE in 12th standard "
            ],

        },
        {
            id: 2,
            title: "Certifications",
            description: [
                "Attended 100+ Hours of Information Technology training and Management training organized by ICAI ",
                "Completed Virtual Internship on  Consulting by BCG via Forage",
                "Completed over five Courses covering 50+ hours of learning on Udemy on PowerBI "
            ]

        },
        {
            id: 3,
            title: "Other Achievements",
            description: [
             "Secured Kudos Award and Extraordinnare Award in EY for client commitment and work ethics ",
             "Won regional competition for event “Extempore” and represented Gurguram Branch and Nationals",
             "Mentored over 25+ Students appearing for CA Intermediate Exams through Vision CA ",
             "Created a whatsapp community of 300+ Members sharing Financial News named “Finworm” ",
             "Secured 2nd Best presenter award during GMCS Training for my presentation on topic “Emergence of China” "
            ]
        }
        
    ]
  return (
    <div
      id="Achievement"
      className="w-full max-h bg-gradient-to-b from-gray-800 to-black text-white py-8 scroll-mt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
            Achievements
          </p>
          </div>

          <div className='flex flex-col md:flex-row md:flex-wrap gap-6'>
            {achievements.map((achievement) => (
                <div key={achievement.id} 
                className=" w-full  md:w-[48%] bg-gray-900 p-4 rounded-lg shadow-md border-l-4 border-yellow-400 ">
                    <div className='flex flex-col mb-4'>
                    <h2  className=' p-4 text-xl font-bold'>{achievement.title}</h2>

                    <div className="pl-6">
                        <ul className='list-disc text-gray-300'>
                        {achievement.description.map((desc) => (
                           <li key={desc.id} className="mb-2">
                      {desc}
                    </li>
                  ))}
                            </ul></div>   
                  </div> 
                </div>
                
            ))}
          </div>


          </div>
          </div>
  )
}

export default achievements;