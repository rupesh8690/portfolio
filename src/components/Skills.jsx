import React from 'react'
import skills from "./Data/skills.json"

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skill">
        <h1>SKILLS</h1>
        <div className="items">
          {skills.map((data) => {
            return (
              <div className="item" key={data.id} data-aos="flip-left"
              data-aos-duration="1000">
                <img src={`/assets/${data.imageSrc}`} alt={data.name} />
                <h3>{data.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Skills
