import React from "react";
import "./Bussiness.css";
const Bussiness = () => {
  return (
    <>
      <div className="bussiness__container">
        <div className="bussiness__content">
          <div className="instructor__details bussiness__details">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
              alt=""
            />
            <p>
              Get unlimited access to 6,000+ of Udemy’s top courses for your
              team. Learn and improve skills across business, tech, design, and
              more.
            </p>
            <button className="instructor-btn">Get Udemy Business</button>
          </div>
        </div>

        <div className="instructor__img">
          <img
            src="https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Bussiness;
