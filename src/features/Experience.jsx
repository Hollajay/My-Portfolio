import { BiHighlight } from "react-icons/bi";
const experienceData = [
  {
    position: "Frontend Developer",
    companyname: "HIRE NG",
    duration: "Apr 2025 - Present",
    about: [
      {
        descrip:
          "Developing dynamic and performant web applications using Next.js, React, and TypeScript.",
      },
      {
        descrip:
          "Built and styled modern UI components using Tailwind CSS and Radix UI for accessible and responsive design.",
      },
      {
        descrip:
          "Collaborate closely with team members to solve problems efficiently and deliver quality solutions.",
      },
      {
        descrip:
          "Utilize Git and GitHub for version control, code collaboration, and project management workflows.",
      },
    ],
  },
  {
    position: "Frontend Developer",
    companyname: "Proattire Technology",
    duration: "Sep 2024 - Present",
    about: [
      {
        descrip:
          "Built and maintained responsive web applications using React and TypeScript.",
      },
      {
        descrip:
          "Designed and implemented modern UI components with Chakra UI, ensuring consistency and accessibility.",
      },
      {
        descrip:
          "Collaborated with cross-functional teams, leveraging Git/GitHub for version control and streamlined workflows.",
      },
      {
        descrip:
          "Optimized application performance, resulting in faster load times and improved user satisfaction.",
      },
    ],
  },
  {
    position: "Fullstack Developer",
    companyname: "Appclick Technology",
    duration: "Aug 2024 - Nov 2024",
    about: [
      {
        descrip:
          "Worked with HTML, CSS, JavaScript, PHP, and Laravel to develop interactive web pages.",
      },
      {
        descrip:
          "Designed and styled web interfaces using Bootstrap and Tailwind CSS.",
      },
      {
        descrip:
          "Assisted in creating and debugging back-end solutions, gaining foundational knowledge of MySQL databases.",
      },
      {
        descrip:
          "Collaborated with senior developers to deliver high-quality software projects within deadlines.",
      },
    ],
  },
];

export const Experience = () => {
  return (
    <div className="- lg:px-15 md:p-5 w-full min-h-screen">
      <div className="lg:px-20 p-6">
        <h1 className="text-3xl  text-left font-subhead text-light-400">{`<Experience/>`}</h1>
        <div className="lg:p-6 mt-2  lg:pr-80 flex flex-col gap-14 text-light-300">
          {experienceData.map((data, index) => (
            <div key={index} className="shadow-pro space-y-2 p-5 rounded-xl">
              <div className="lg:flex  space-x-2">
                <h1 className="text-2xl font-semibold text-light-400">
                  {data.position}
                </h1>
                <p className="text-xl">@{data.companyname}</p>
              </div>
              <p className="text-lg text-light-500 font-subhead">
                {data.duration}
              </p>
              <div className="px-5 space-y-3">
                {data.about.map((descrip, index) => (
                  <div
                    key={index}
                    className="flex space-x-3 items-center"
                    data-aos="fade-up"
                  >
                    <BiHighlight className="text-light-400 w-7" />
                    <p className="text-sm">{descrip.descrip}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
