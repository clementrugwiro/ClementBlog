import React from "react";
import "./skills.css"; // Make sure your CSS file is correctly linked
import javaIcon from "../../assets/java.png"; // Add icons for each skill
import javascriptIcon from "../../assets/javascript.png";
import cIcon from "../../assets/c.png";
import cppIcon from "../../assets/cpp.png";
import nodeIcon from "../../assets/node.png";
import reactIcon from "../../assets/react.png";
import nextIcon from "../../assets/nextjs.svg";
import reactNativeIcon from "../../assets/react-native.png";
import figmaIcon from "../../assets/figma.png";
import vscodeIcon from "../../assets/vscode.png";
import canvaIcon from "../../assets/canva.png";
import jiraIcon from "../../assets/jira.png";
import photoshopIcon from "../../assets/photoshop.png";
import officeIcon from "../../assets/office.png";

const TechnologySkills = () => {
  return (
    <section id="tech-skills">
      <span className="skillTitle">Technology Skills</span>
      <ul className="skillsbars">
        <div className="skillBarr">
          <h2>Programming Languages</h2>
          <div className="skill">
            <img src={javaIcon} alt="Java" className="skillbarImg" />
            <span>Java</span>
          </div>
          <div className="skill">
            <img
              src={javascriptIcon}
              alt="JavaScript"
              className="skillbarImg"
            />
            <span>JavaScript</span>
          </div>
          <div className="skill">
            <img src={cIcon} alt="C" className="skillbarImg" />
            <span>C</span>
          </div>
          <div className="skill">
            <img src={cppIcon} alt="C++" className="skillbarImg" />
            <span>C++</span>
          </div>
        </div>

        <div className="skillBarr">
          <h2>Frameworks</h2>
          <div className="skill">
            <img src={nodeIcon} alt="Node.js" className="skillbarImg" />
            <span>Node.js</span>
          </div>
          <div className="skill">
            <img src={reactIcon} alt="React.js" className="skillbarImg" />
            <span>React.js</span>
          </div>
          <div className="skill">
            <img src={nextIcon} alt="Next.js" className="skillbarImg" />
            <span>Next.js</span>
          </div>
          <div className="skill">
            <img
              src={reactNativeIcon}
              alt="React Native"
              className="skillbarImg"
            />
            <span>React Native</span>
          </div>
        </div>

        <div className="skillBarr">
          <h2>Tools</h2>
          <div className="skill">
            <img src={figmaIcon} alt="Figma" className="skillbarImg" />
            <span>Figma</span>
          </div>
          <div className="skill">
            <img
              src={vscodeIcon}
              alt="Visual Studio Code"
              className="skillbarImg"
            />
            <span>Visual Studio Code</span>
          </div>
          <div className="skill">
            <img src={canvaIcon} alt="Canva" className="skillbarImg" />
            <span>Canva</span>
          </div>
          <div className="skill">
            <img src={jiraIcon} alt="Jira" className="skillbarImg" />
            <span>Jira</span>
          </div>
          <div className="skill">
            <img
              src={photoshopIcon}
              alt="Adobe Photoshop"
              className="skillbarImg"
            />
            <span>Adobe Photoshop</span>
          </div>
          <div className="skill">
            <img
              src={officeIcon}
              alt="Microsoft Office"
              className="skillbarImg"
            />
            <span>Microsoft Office Tools</span>
          </div>
        </div>
      </ul>
    </section>
  );
};

export default TechnologySkills;
