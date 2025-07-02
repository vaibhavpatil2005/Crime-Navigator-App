import React, { useContext } from "react";
import { Analytics } from "../component/Analytics";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'

import { Link } from "react-router-dom"

// import logo from "../assets/img/logo/logo.jpg";
import slider1 from "../assets/img/slider/slider-1.jpg";
import slider2 from "../assets/img/slider/slider-2.jpg";
import slider3 from "../assets/img/slider/slider-3.jpg";
import { AuthContext } from "../context/AuthContext";


const Home = () => {

  const { userData } = useContext(AuthContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  const getStartedRoute = userData ? "/analyzer" : "/login";
  return (
    <>
      <div className="slider-wrapper">
        <section className="slider-section">
          <Slider {...settings} className="slider-active slick-style">
            {/* Slider 1 */}
            <div className="single-slider">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="slider-content">
                      <h1 className="aman1" data-animation="fadeInDown" data-duration="1.5s" data-delay=".5s">Predict Future Crime Hotspots</h1>
                      <p className="aman1" data-animation="fadeInLeft" data-duration="1.5s" data-delay=".7s">
                        Leverage data-driven predictions to anticipate potential crime areas. Our advanced algorithms analyze past trends to forecast future risks.
                      </p>
                      <Link to={getStartedRoute} className="btn theme-btn page-scroll aman1" data-animation="fadeInUp" data-duration="1.5s" data-delay=".9s">Get Started</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="single-slider img-bg" style={{ backgroundImage: `url(${slider2})` }}>
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="slider-content">
                      <h1 className="aman1" data-animation="fadeInDown" data-duration="1.5s" data-delay=".5s">Welcome to Crime Navigator</h1>
                      <p className="aman1" data-animation="fadeInLeft" data-duration="1.5s" data-delay=".7s">
                        Your Gateway to Crime Insights Across India
                        Stay informed, stay safe. Explore real-time crime statistics, news updates, and predictive analysis tailored to cities and states across India.
                      </p>
                      <Link to={getStartedRoute} className="btn theme-btn page-scroll aman1" data-animation="fadeInUp" data-duration="1.5s" data-delay=".9s">Get Started</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider 3 */}
            <div className="single-slider img-bg" style={{ backgroundImage: `url(${slider3})` }}>
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="slider-content">
                      <h1 className="aman1" data-animation="fadeInDown" data-duration="1.5s" data-delay=".5s">Explore Crime Trends</h1>
                      <p className="aman1" data-animation="fadeInLeft" data-duration="1.5s" data-delay=".7s">
                        Uncover detailed crime patterns through interactive charts and graphs. Analyze trends across different regions and timeframes to gain valuable insights.
                      </p>
                      <Link to={getStartedRoute} className="btn theme-btn page-scroll aman1" data-animation="fadeInUp" data-duration="1.5s" data-delay=".9s">Get Started</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </section>
      </div>

      <section id="home-we-do-section">
        <div className="container">
          <div className="text-center">
            <span className="subtitle">Analyze. Predict. Stay Safe.</span>
            <h2 className="title">Empowering You with Crime Insights Across India</h2>
            <p className="description">
              Crime Navigator provides real-time crime data, trends, and predictions across India. Explore crime patterns by city and state, stay updated with live news, and gain insights through interactive charts. With AI-powered analytics, predict future trends and make informed decisions to enhance safety and awareness.
            </p>
          </div>
        </div>
      </section>

      <Analytics />

      <section id="home-hero-section">
        <div className="container">
          <div className="grid">
          
            {/* Hero Content */}
            <div className="hero-content">
              <p className="intro-text">We are here to help you!</p>
              <h1 className="hero-title">Get Started Today</h1>
              <p className="hero-description">
                Ready to take the first step towards a more efficient and secure platform which offers real-time crime updates, predictive insights, and detailed analytics to empower you with knowledge. Whether you are a citizen, policymaker, or researcher, we provide the tools you need to understand crime trends, make data-driven decisions, and contribute to a safer society.
              </p>
              <div className="cta-buttons">
                <Link to="/about" className="btn-primary">About us</Link>
                <Link to="/service" className="btn-secondary">Know More</Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hero-image">
              <img
                src="https://cdn.pixabay.com/photo/2014/04/03/00/27/globe-308335_640.png"
                alt="coding together"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;