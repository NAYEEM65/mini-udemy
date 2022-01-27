import React from 'react';
import './Slider.css';
import Slider from 'react-slick';
import courseData from '../courseData/CourseData';
import ReactStarsRating from 'react-awesome-stars-rating';
import { Tooltip, Container } from '@mui/material';
// import "../Courses/Courses.css";

const Sliders = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: 'red' }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: 'green' }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Container sx={{ display: { xs: 'none', lg: 'block' } }}>
            <div className="container">
                <Slider {...settings}>
                    {courseData.map((course) => {
                        return (
                            <Tooltip arrow title={course.courseTitle} placement="right">
                                <div
                                    key={course.id}
                                    style={{ marginRight: '10px' }}
                                    className="course"
                                >
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
                                            <b>${course.discountPrice}</b>{' '}
                                            <s>${course.regularPrice}</s>{' '}
                                        </div>

                                        {course.bestSellarBadge && (
                                            <div className="sellar__badge">
                                                {course.bestSellarBadge}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Tooltip>
                        );
                    })}
                </Slider>
            </div>
        </Container>
    );
};

export default Sliders;
