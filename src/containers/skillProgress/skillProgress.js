import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <div >
        <Fade bottom duration={1000} distance="20px">
          <div className="skills-container">
            <div className="skills-bar">
              <div >
                <h1 className="skills-heading">TECHNICAL SKILLS</h1>
                {techStack.experience.map((exp, i) => {
                  const progressStyle = {
                    width: exp.progressPercentage
                  };
                  return (
                    <div key={i} className="skill">
                      <p>{exp.Stack}</p>
                      <div className="meter">
                        <span style={progressStyle}></span>
                      </div>
                    </div>
                  );
                })}
              </div>
              </div>
            {/* <div className="skills-image">
              {(
                <img
                  alt="Skills"
                  src={require("../../assets/images/skill.svg")}
                />
              )}
            </div> */}
          </div>
        </Fade>
        </div>
    );
  }
  return null;
}
