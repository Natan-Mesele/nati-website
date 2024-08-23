import React from 'react';
import Fade from 'react-reveal/Fade';

function Skill() {
  return (
    <div className="bg-cover bg-center w-full h-[80vh] text-white p-6 md:p-8" style={{ backgroundImage: "url('img/back.jpg')" }}>
      <Fade bottom>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Development Skills</h2>
          <p className="text-base md:text-lg mb-6">I develop my skills through online courses at Evangadi & Udemy.</p>
        </div>
      </Fade>
      <Fade bottom>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 md:mt-12">
          <SkillCircle label="HTML/CSS/Bootstrap" percentage={90} />
          <SkillCircle label="JavaScript/DOM/jQuery" percentage={80} />
          <SkillCircle label="React JS/Node JS/Express JS/MySQL" percentage={70} />
          <SkillCircle label="Java" percentage={65} />
          <SkillCircle label="Spring Boot" percentage={60} />
        </div>
      </Fade>
    </div>
  );
}

const SkillCircle = ({ label, percentage }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24">
        <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 36 36">
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
