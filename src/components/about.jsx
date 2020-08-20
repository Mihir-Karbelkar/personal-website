import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "HTML5_skill",
          content: "HTML5/ CSS3/ JS",
          porcentage: "80%",
          value: "80",
        },

        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "90%",
          value: "90",
        },
        {
          id: "CPP_skill",
          content: "C++",
          porcentage: "90%",
          value: "90",
        },
        {
          id: "JAVA_skill",
          content: "Java",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "Django_skill",
          content: "Django/ Django Rest",
          porcentage: "80%",
          value: "80",
        },

        {
          id: "Datbase_skill",
          content: "Databases (SQL and NoSQL)",
          porcentage: "80%",
          value: "80",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a final year undergraduate pursuing computer science at VIT Bhopal, always looking to build something cool and innovative. Have the ability to pick up any tech stack and write production ready code in a short time.",
        },
        {
          id: "second-p-about",
          content:
            "Have worked with multiple companies as an intern and have also contributed to open source organisations such as Sotware Heritage and Mozilla Developer Network.",
        },
        {
          id: "third-p-about",
          content:
            "Always love to build projects and have built multiple projects ranging from web development to machine learning projects.",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                            src={myImage}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
