import React from "react";
import HoverDetails from "../HoverDetails/HoverDetails";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="education__container">
        <div className="education__img">
          <img
            src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg"
            alt=""
          />
        </div>
        <div className="education__content">
          <div className="education__details">
            <h1>Transform your life through education</h1>
            <p>
              Learners around the world are launching new careers, advancing in
              their fields, and enriching their lives.
            </p>
            <button
              className="education-btn"
              onclick={<HoverDetails></HoverDetails>}
            >
              Start teaching today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
