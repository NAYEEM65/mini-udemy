import React from "react";
import "./BecomeInstructor.css";

const BecomeInstructor = () => {
  return (
    <>
      <div className="instructor__container">
        <div className="instructor__img">
          <img
            src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg?__cf_chl_managed_tk__=X0xsumVmQ7e9tkQFrxTSOeDmZD8lHthcBcj5YYgjyfM-1640363942-0-gaNycGzNCFE"
            alt=""
          />
        </div>
        <div className="instructor__content">
          <div className="instructor__details">
            <h1>Become an instructor</h1>
            <p>
              Instructors from around the world teach millions of students on
              Udemy. We provide the tools and skills to teach what you love.
            </p>
            <button className="instructor-btn">Start teaching today</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomeInstructor;
