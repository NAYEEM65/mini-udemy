import React from "react";
import "./FeatureTopic.css";

const development = [
  {
    topic: "Python",
    numberOfStudents: "32,917,853",
  },
  {
    topic: "Web Development",
    numberOfStudents: "10,415,214",
  },
  {
    topic: "Machine Learning",
    numberOfStudents: "6,500,780",
  },
];

const business = [
  {
    topic: "Financial Analysis",
    numberOfStudents: "1,123,293",
  },
  {
    topic: "SQL",
    numberOfStudents: "5,135,133",
  },
  {
    topic: "PMP",
    numberOfStudents: "1,543,175",
  },
];

const itAndSoftware = [
  {
    topic: "AWS Certification",
    numberOfStudents: "5,004,507",
  },
  {
    topic: "Ethical Hacking",
    numberOfStudents: "10,120,685",
  },
  {
    topic: "Cyber Security",
    numberOfStudents: "3,643,935",
  },
];

const design = [
  {
    topic: "Photoshop",
    numberOfStudents: "10,343,206",
  },
  {
    topic: "Graphic Design",
    numberOfStudents: "3,167,612",
  },
  {
    topic: "Drawing",
    numberOfStudents: "2,297,399",
  },
];

const FeatureTopic = () => {
  return (
    <>
      <div className="feature__container">
        <div className="feature">
          <div className="feature__heading">
            <h3>Featured topics by category</h3>
          </div>

          <div className="feature__details">
            <div className="development__topic">
              <h4>Development</h4>
              {development.map((catagory) => {
                return (
                  <div className="topic__details">
                    <p>{catagory.topic}</p>
                    <span>
                      <small>{catagory.numberOfStudents} students</small>
                    </span>
                  </div>
                );
              })}
              <button className="explore__btn">Explore more topics</button>
            </div>

            <div className="development__topic">
              <h4>Business</h4>
              {business.map((catagory) => {
                return (
                  <div className="topic__details">
                    <p>{catagory.topic}</p>
                    <span>
                      <small>{catagory.numberOfStudents} students</small>
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="development__topic">
              <h4>IT and Software</h4>
              {itAndSoftware.map((catagory) => {
                return (
                  <div className="topic__details">
                    <p>{catagory.topic}</p>
                    <span>
                      <small>{catagory.numberOfStudents} students</small>
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="development__topic">
              <h4>Design</h4>
              {design.map((catagory) => {
                return (
                  <div className="topic__details">
                    <p>{catagory.topic}</p>
                    <span>
                      <small>{catagory.numberOfStudents} students</small>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureTopic;
