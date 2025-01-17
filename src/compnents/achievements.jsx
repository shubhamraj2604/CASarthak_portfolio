import React from 'react'

const achievements = () => {
    const achievements=[
        {
            id: 1,
            title: "Professional Recognition",
            description:[
                "Received Kudos and Emerging Extraordinaire in SRBA for outstanding client communication and dedication",
                "Earned Gold Standard feedback from Director and senior leaders for exceptional commitment ",
                "Recognized by client’s CFO for leveraging Alteryx and Power BI to deliver actionable and impactful insights"
            ],

        },
        {
            id: 2,
            title: "Certifications",
            description: [
                "Attended 200+ Hours of Information Technology training and Management training organized by ICAI ",
                "Enhanced skills in data analytics tools PowerBI and Alteryx by completing Udemy course",
                "Completed over five Courses covering 50+ hours of learning on Udemy on PowerBI "
            ]

        },
        {
            id: 3,
            title: "Other Achievements",
            description: [
             "Won regional competition for event “Extempore” and represented Gurugram Branch at Nationals",
             "Honored with awards for Best All-Rounder and 3rd Highest Scorer in School ",
             " Contributed articles to CA newsletter and “Finworm”, a financial newsletter community of 300+ members ",
              "Secured 2nd best presenter award during GMCS Training among 40+ students conducted by ICAI  ",
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