import React from "react";
import Slider from "react-slick";

import "./Home.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="home__slider">
        <div className="Home__container">
          <Slider {...settings}>
            <div className="homeSlider__container">
              <div className="homeSlider__content">
                <div className="sliderContent">
                  <h3>Cheers to your future</h3>
                  <p>
                    Achieve even more of your goals. As thanks for learning with
                    us, enjoy courses as low as $13.99 through tomorrow.
                  </p>
                </div>
              </div>
            </div>

            <div className="homeSlider__containertwo">
              <div className="homeSlider__content">
                <div className="sliderContent">
                  <h3>Cheers to your future</h3>
                  <p>
                    Achieve even more of your goals. As thanks for learning with
                    us, enjoy courses as low as $13.99 through tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
