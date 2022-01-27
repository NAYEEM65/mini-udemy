import React from "react";
import "./TopCatagory.css";

const topCatagory = [
  {
    imgUrl:
      "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg?__cf_chl_managed_tk__=YXEbWpGb35_9HA.j5KsmDhAoz8GbvDjiuw6Ee54HwO8-1640288661-0-gaNycGzNB6U",
    title: "Design",
  },
  {
    imgUrl:
      "https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg",
    title: "Development",
  },
  {
    imgUrl:
      "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg",
    title: "Marketing",
  },
  {
    imgUrl:
      "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
    title: "IT and Software",
  },
  {
    imgUrl:
      "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg",
    title: "Personal Development",
  },
  {
    imgUrl:
      "https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg",
    title: "Business",
  },
  {
    imgUrl:
      "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg",
    title: "Photography",
  },
  {
    imgUrl:
      "https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg",
    title: "Music",
  },
];

const TopCatagory = () => {
  return (
    <>
      <div className="topCatagory">
        <div className="topCatagory__title">
          <h4>Top categories</h4>
        </div>
        <div className="topCatagory__container">
          {topCatagory.map((catagory) => {
            return (
              <div className="catagoryCard">
                <div className="catagoryCard__container">
                  <img src={catagory.imgUrl} alt="" />
                  <br />
                  <span className="catagoryTitle">{catagory.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopCatagory;
