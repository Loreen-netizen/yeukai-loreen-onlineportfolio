import React from "react";
import { v4 as createId } from "uuid";
import { EDUCATION_MAP } from "../../utils/skillsAndLanguages";


export const Experience = () => {
  return (
    <div>
      <h1>Experience</h1>
      <h3>And Education</h3>
      {EDUCATION_MAP.map((skill) => {
        return (
          <section key={createId()}>
            <h4>{skill.name}</h4>
            <p>{skill.description}</p>
            <p>
              {skill.location}. {skill.year}
            </p>
          </section>
        );
      })}
    </div>
  );
};

export default Experience;
