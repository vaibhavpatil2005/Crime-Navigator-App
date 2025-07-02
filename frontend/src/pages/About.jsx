import React from "react";
import shape2 from "../assets/img/shapes/shape-2.svg";


import rishabhOjhaImage from "../assets/img/about/rishabhOjha.jpg";
import sumitRajTiwariImage from "../assets/img/about/sumitRajTiwari.jpg";
import avadheshKumarShahImage from "../assets/img/about/avadheshKumarShah.jpg";
import amanRahangdaleImage from "../assets/img/about/amanRahangdale.jpg";
import vaibhavPatilImage from "../assets/img/about/vaibhavPatil.jpg";
import rohitKumarSahooImage from "../assets/img/about/rohitKumarSahoo.jpg";
import mohitManikImage from "../assets/img/about/mohitManik.jpg";
import mukeshLodhiImage from "../assets/img/about/mukeshLodhi.jpg";
 
const About = () => {
  const teamMembers = [
    { id: 1, name: "Rishabh Ojha", photo: rishabhOjhaImage },
    { id: 2, name: "Sumit Raj Tiwari", photo: sumitRajTiwariImage },
    { id: 3, name: "Avadhesh Kumar Shah", photo: avadheshKumarShahImage },
    { id: 4, name: "Aman Rahangdale", photo: amanRahangdaleImage },
    { id: 5, name: "Vaibhav Patil", photo: vaibhavPatilImage },
    { id: 6, name: "Rohit Kumar Sahoo", photo: rohitKumarSahooImage },
    { id: 7, name: "Mohit Manik", photo: mohitManikImage },
    { id: 8, name: "Mukesh Lodhi", photo: mukeshLodhiImage },
  ];

  return (
    <>
      <section id="about" className="about-section pt-120">
        <div className="shape shape-2">
          <img src={shape2} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-11 mx-auto">
              <div className="about-content text-center mb-55">
                <div className="section-title mb-30">
                  <span className="wow fadeInDown" data-wow-delay=".2s">
                    About Us
                  </span>
                  <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">
                    Welcome to Crime Navigator
                  </h2>
                </div>
                <p className="mb-35 wow fadeInUp" data-wow-delay=".6s">
                  Crime Navigator is a platform that provides real-time crime reports, interactive maps, and safety insights. Our goal is to keep communities informed and help create a safer environment through data-driven awareness.  
                  <br />
                  Stay updated, stay safe!
                </p>
                <a
                  href="/about"
                  className="btn theme-btn wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-img text-center">
          <img src="assets/img/about/about-img.png" alt="" />
        </div>
      </section>

      {/* Team Members Section */}
      <section id="team" className="team-section pt-60 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-11 mx-auto">
              <div className="section-title text-center mb-60">
                <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">
                  Meet Our Team
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  Our dedicated team is committed to making communities safer.
                </p>
              </div>
              <div className="team-grid">
                {/* First Row of Team Members */}
                <div className="row mb-30">
                  {teamMembers.slice(0, 4).map((member) => (
                    <div className="col-md-3 col-sm-6" key={member.id}>
                      <div className="team-member text-center wow fadeInUp" data-wow-delay=".2s">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="img-fluid rounded-circle mb-3"
                        />
                        <h5>{member.name}</h5>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Second Row of Team Members */}
                <div className="row">
                  {teamMembers.slice(4, 8).map((member) => (
                    <div className="col-md-3 col-sm-6" key={member.id}>
                      <div className="team-member text-center wow fadeInUp" data-wow-delay=".4s">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="img-fluid rounded-circle mb-3"
                        />
                        <h5>{member.name}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;