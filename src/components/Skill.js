import React from "react";
import Fade from "react-reveal/Fade";

function Skill() {
  return (
    <div
      className="bg-cover bg-center w-full h-[80vh] text-white p-6 md:p-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1671159593357-ee577a598f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <Fade bottom>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Development Skills
          </h2>
          <p className="text-base md:text-lg mb-6">
            I develop my skills through online courses at udcity & Great
            Learning.
          </p>
        </div>
      </Fade>
      <Fade bottom>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 md:mt-12">
          <SkillCircle label="HTML/CSS/Bootstrap" percentage={99} />
          <SkillCircle
            label="Shadcn/ui /Material ui/tailwind css"
            percentage={98}
          />
          <SkillCircle label="JavaScript/DOM/jQuery" percentage={96} />
          <SkillCircle
            label="React JS/Node JS/Express JS/MySQL"
            percentage={90}
          />
          <SkillCircle label="Java/Spring Boot" percentage={92} />
        </div>
      </Fade>
    </div>
  );
}

const SkillCircle = ({ label, percentage }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24">
        <svg
          className="absolute w-full h-full transform -rotate-90"
          viewBox="0 0 36 36"
        >
          <path
            className="text-gray-300"
            fill="none"
            strokeWidth="3"
            stroke="currentColor"
            d="M18 2.0845 A 15.9155 15.9155 0 0 1 33.9155 18 A 15.9155 15.9155 0 0 1 18 33.9155 A 15.9155 15.9155 0 0 1 2.0845 18 A 15.9155 15.9155 0 0 1 18 2.0845"
          />
          <path
            className="text-blue-500"
            fill="none"
            strokeWidth="3"
            stroke="currentColor"
            strokeDasharray={`${percentage} ${100 - percentage}`}
            d="M18 2.0845 A 15.9155 15.9155 0 0 1 33.9155 18 A 15.9155 15.9155 0 0 1 18 33.9155 A 15.9155 15.9155 0 0 1 2.0845 18 A 15.9155 15.9155 0 0 1 18 2.0845"
          />
        </svg>
        <div className="absolute text-xl font-bold md:text-2xl">
          {percentage}%
        </div>
      </div>
      <p className="mt-4 text-sm md:text-lg font-bold">{label}</p>
    </div>
  );
};

export default Skill;
