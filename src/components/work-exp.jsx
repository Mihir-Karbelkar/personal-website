import React from "react";

class WorkExp extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90",
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
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "85%",
          value: "85",
        },
      ],
      about_me: [
        {
          id: "first-p-work",
          title: "Mentororg",
          position: "Software Developer Intern",
          duration: "Apr 2020 - Jun 2020",
          content:
            "Led development of an EdTech application with Python Flask, Ionic (Angular) with the backend being on Postgres. Used opencv to extract questions from images. Hosted it on AWS ec2, used AWS S3 to store static assets.",
        },
        {
          id: "second-p-work",
          title: "Daphnis Labs",
          position: "Software Developer Intern",
          duration: "Apr 2020 - Jun 2020",
          content:
            "Delivered an accounting application using Django Rest and React JS that allows the user to calculate balance and store receipts and payment details.",
        },
        {
          id: "third-p-work",
          title: "Aidetic",
          position: "Software Developer Intern",
          duration: "Jun 2019 - Jul 2019",
          content:
            "Built scrapers using selenium for Python to scrape properties from websites which used angular to retrieve images and property titles, improved performance, reducing scraping time to 50%. Additionally, built an admin panel that lets one add or check the status of DVRs using Flask and jQuery.",
        },
        {
          id: "fourth-p-work",
          title: "Stackraft",
          position: "Software Developer Intern",
          duration: "Jun 2019 - Jul 2019",
          content:
            "Built a resume parser using python to parse resumes from linkedin. Also worked on integrating slack invite link page.",
        },
        {
          id: "fifth-p-work",
          title: "Open Source Contribution",
          position: "",
          duration: "",
          content:
            "Worked on the Mozilla Developer Network website and implemented a feature which allows one to add their Discourse profile link to a user’s MDN profile. Worked on fixing different bugs in the Software Heritage project.",
        },
      ],
    };
  }

  render() {
    return (
      <section id="workExp" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col">
                    <div className="pt-4 pt-md-0">
                      <div className="title-box">
                        <h5 className="title-left">Work Experience</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <React.Fragment key={content.id + "-frag"}>
                            <div className="title-box-3" key={content.id}>
                              <h5 className="title-left-subheading">
                                {content.title}{" "}
                              </h5>
                              <span
                                style={{ color: "grey", fontSize: "1.4rem" }}
                                key={content.id + "-pos"}
                              >
                                {content.position ? content.position : ""}
                              </span>
                              <div>
                                <span
                                  style={{ color: "grey", fontSize: "1.2rem" }}
                                  key={content.id + "-dur"}
                                >
                                  {content.duration ? content.duration : ""}
                                </span>
                              </div>
                            </div>

                            <p className="lead" key={content.id + "-con"}>
                              {content.content}
                            </p>
                          </React.Fragment>
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

export default WorkExp;
