import React from "react";
// import courseData from "../courseData/CourseData";
import "./Courses.css";
import ReactStarsRating from "react-awesome-stars-rating";
import { Tooltip } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Courses = (props) => {
  return (
    <div>
      <div className="courses-container">
        <div className="courses">
          {props.courses.map((course) => {
            return (
              <Tooltip arrow title={course.courseTitle} placement="right">
                <div key={course.id} className="course">
                  <div className="course__img">
                    <img src={course.imgageUrl} alt="" />
                    <div className="for-hover"></div>
                  </div>

                  <div className="course__info">
                    <div className="course__title">
                      <h2>{course.courseTitle}</h2>
                    </div>
                    <div className="author__details">
                      <span>{course.author}</span>
                    </div>
                    <div>
                      <div className="course__rating">
                        <small>{course.rating}</small>
                        <ReactStarsRating
                          size={15}
                          isEdit={false}
                          value={course.rating}
                        />
                        <small>({course.numberOfReview})</small>
                      </div>
                    </div>
                    <div className="course__price">
                      <b>${course.discountPrice}</b>{" "}
                      <s>${course.regularPrice}</s>{" "}
                    </div>
                    <div className="cart__area">
                      <div className="best__seller">
                        {course.bestSellarBadge && (
                          <div className="sellar__badge">
                            {course.bestSellarBadge}
                          </div>
                        )}
                      </div>
                      <div className="cart__btn">
                        <Stack spacing={2} direction="row">
                          <Button
                            onClick={() => props.handleProducts(course)}
                            variant="contained"
                            style={{ fontSize: "10px" }}
                          >
                            Add to Cart
                          </Button>
                        </Stack>
                      </div>
                    </div>
                  </div>
                </div>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
