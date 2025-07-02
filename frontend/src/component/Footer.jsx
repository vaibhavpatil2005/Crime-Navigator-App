import React from "react";
import fbg from "../assets/img/bg/footer-bg.jpg";
import logo from "../assets/img/logo/crime_logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="footer img-bg"
      style={{
        backgroundImage: `url(${fbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        padding: "30px 0 15px 0", // Further reduced padding
      }}
    >
      <div className="container" id="makefooterStickyBottom" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div className="footer-widget-wrapper">
          <div className="row" style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "space-between" }}>
            <div className="col-xl-4 col-lg-5 col-md-6" style={{ flex: "1 1 250px", maxWidth: "100%" }}>
              <div className="footer-widget mb-20">
                <a href="index.html" className="logo">
                  <img src={logo} alt="Crime Navigator Logo" style={{ maxWidth: "120px", marginBottom: "10px" }} />
                </a>
                <p style={{ color: "#ccc", lineHeight: "1.5", fontSize: "13px", marginBottom: "15px" }}>
                  "Crime Navigator is your trusted companion for staying informed about crime trends in your area. Get real-time alerts, safety recommendations, and community updates to make informed decisions and stay protected."
                </p>
                <div className="footer-social-links">
                  <ul style={{ display: "flex", gap: "10px", padding: "0", margin: "0" }}>
                    <li>
                      <a href="https://www.facebook.com/" style={{ color: "#fff", fontSize: "16px" }}>
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/" style={{ color: "#fff", fontSize: "16px" }}>
                        <i className="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" style={{ color: "#fff", fontSize: "16px" }}>
                        <i className="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" style={{ color: "#fff", fontSize: "16px" }}>
                        <i className="lni lni-instagram-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6" style={{ flex: "1 1 150px", maxWidth: "100%" }}>
              <div className="footer-widget mb-20">
                <h4 style={{ color: "#fff", marginBottom: "10px", fontSize: "16px" }}>Quick Links</h4>
                <ul className="footer-links" style={{ listStyle: "none", padding: "0", margin: "0" }}>
                  <li><Link to="/" style={{ color: "#ccc", textDecoration: "none", fontSize: "13px", lineHeight: "1.8" }}>Home</Link></li>
                  <li><Link to="/about" style={{ color: "#ccc", textDecoration: "none", fontSize: "13px", lineHeight: "1.8" }}>Abput</Link></li>
                  <li><Link to="/service" style={{ color: "#ccc", textDecoration: "none", fontSize: "13px", lineHeight: "1.8" }}>Services</Link></li>
                  <li><Link to="/blog" style={{ color: "#ccc", textDecoration: "none", fontSize: "13px", lineHeight: "1.8" }}>Blog</Link></li>
                  <li><Link to="/" style={{ color: "#ccc", textDecoration: "none", fontSize: "13px", lineHeight: "1.8" }}>Contact</Link></li>
                  
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-md-7" style={{ flex: "1 1 250px", maxWidth: "100%" }}>
              <div className="footer-widget mb-20">
                <h4 style={{ color: "#fff", marginBottom: "10px", fontSize: "16px" }}>Locations : </h4>
                <div className="map-canvas">
                  <iframe
                    className="map"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Madhya%20Pradesh%2C%20INDIA&amp;t=&amp;z=8&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                    style={{ border: "0", width: "100%", height: "120px", borderRadius: "8px" }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area" style={{ marginTop: "15px", borderTop: "1px solid #444", paddingTop: "10px" }}>
          <p className="mb-0 text-center" style={{ color: "#ccc", fontSize: "12px" }}>
            Designed and Developed By{" "}
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Team Ojha
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;