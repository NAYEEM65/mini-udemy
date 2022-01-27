import React from "react";
import "./TrustedCompany.css";

const companyImg = [
  {
    imgUrl: "../../Assets/images/box-dark.svg",
  },
  {
    imgUrl: "https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg",
  },
  {
    imgUrl: "https://s.udemycdn.com/partner-logos/v4/box-dark.svg",
  },
  {
    imgUrl: "https://s.udemycdn.com/partner-logos/v4/netflix-dark.svg",
  },
  {
    imgUrl: "https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg",
  },
];

const TrustedCompany = () => {
  return (
    <>
      <div className="trusted__container">
        <div className="trusted__title">
          <h2>Trusted by companies of all sizes</h2>
        </div>
        <div className="company__img">
          {companyImg.map((brand) => {
            return (
              <div className="brandImg">
                <img src={brand.imgUrl} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TrustedCompany;
