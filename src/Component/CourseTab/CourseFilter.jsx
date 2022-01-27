import React from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { Tooltip } from "@mui/material";
const CourseFilter = (props) => {
  const {
    id,
    imgsrc,
    courseTitle,
    cousreAuthor,
    courseRating,
    review,
    discountPrice,
    regularPrice,
    sellerBadge,
  } = props;

  return (
    <Tooltip arrow title={courseTitle} placement="right">
      <div className="course__container">
        <div key={id} className="course">
          <div className="course__img">
            <img src={imgsrc} alt="" />
            <div className="for-hover"></div>
          </div>

          <div className="course__info">
            <div className="course__title">
              <h2>{courseTitle}</h2>
            </div>
            <div className="author__details">
              <span>{cousreAuthor}</span>
            </div>
            <div>
              <div className="course__rating">
                <small>{courseRating}</small>
                <ReactStarsRating
                  size={15}
                  isEdit={false}
                  value={courseRating}
                />
                <small>({review})</small>
              </div>
            </div>
            <div className="course__price">
              <b>${discountPrice}</b> <s>${regularPrice}</s>{" "}
            </div>

            {sellerBadge && <div className="sellar__badge">{sellerBadge}</div>}
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

export default CourseFilter;
