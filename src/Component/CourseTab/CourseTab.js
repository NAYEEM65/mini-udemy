import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import courseData from "../courseData/CourseData";
import "../Courses/Courses.css";
import "./CourseTab.css";
import CourseFilter from "./CourseFilter";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div className="course__parents">{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CourseTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "1200px", margin: " 0 auto" }} classNmae="course__parent">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Python" {...a11yProps(0)} />
          <Tab label="Excel" {...a11yProps(1)} />
          <Tab label="Web Development" {...a11yProps(2)} />
          <Tab label="JavaScript" {...a11yProps(2)} />
          <Tab label="Data Science" {...a11yProps(2)} />
          <Tab label="AWS Certification" {...a11yProps(2)} />
          <Tab label="Drawing" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel varient="div" value={value} index={0}>
        {courseData.map((course) => {
          return (
            course.category === "Python" && (
              <CourseFilter
                imgsrc={course.imgageUrl}
                courseTitle={course.courseTitle}
                cousreAuthor={course.author}
                courseRating={course.rating}
                review={course.numberOfReview}
                discountPrice={course.discountPrice}
                regularPrice={course.regularPrice}
                sellerBadge={course.bestSellarBadge}
                id={course.id}
              />
            )
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {courseData.map((course) => {
          return (
            course.category === "Excel" && (
              <CourseFilter
                imgsrc={course.imgageUrl}
                courseTitle={course.courseTitle}
                cousreAuthor={course.author}
                courseRating={course.rating}
                review={course.numberOfReview}
                discountPrice={course.discountPrice}
                regularPrice={course.regularPrice}
                sellerBadge={course.bestSellarBadge}
                id={course.id}
              />
            )
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {courseData.map((course) => {
          return (
            course.category === "Web Development" && (
              <CourseFilter
                imgsrc={course.imgageUrl}
                courseTitle={course.courseTitle}
                cousreAuthor={course.author}
                courseRating={course.rating}
                review={course.numberOfReview}
                discountPrice={course.discountPrice}
                regularPrice={course.regularPrice}
                sellerBadge={course.bestSellarBadge}
                id={course.id}
              />
            )
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {courseData.map((course) => {
          return (
            course.category === "JavaScript" && (
              <CourseFilter
                imgsrc={course.imgageUrl}
                courseTitle={course.courseTitle}
                cousreAuthor={course.author}
                courseRating={course.rating}
                review={course.numberOfReview}
                discountPrice={course.discountPrice}
                regularPrice={course.regularPrice}
                sellerBadge={course.bestSellarBadge}
                id={course.id}
              />
            )
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {courseData.map((course) => {
          return (
            course.category === "Data Science" && (
              <CourseFilter
                imgsrc={course.imgageUrl}
                courseTitle={course.courseTitle}
                cousreAuthor={course.author}
                courseRating={course.rating}
                review={course.numberOfReview}
                discountPrice={course.discountPrice}
                regularPrice={course.regularPrice}
                sellerBadge={course.bestSellarBadge}
                id={course.id}
              />
            )
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={5}>
        {courseData.map((course) => {
          return (
            course.category === "AWS Certification" && (
              <CourseFilter
                imgsrc={course.imgageUrl}
                courseTitle={course.courseTitle}
                cousreAuthor={course.author}
                courseRating={course.rating}
                review={course.numberOfReview}
                discountPrice={course.discountPrice}
                regularPrice={course.regularPrice}
                sellerBadge={course.bestSellarBadge}
                id={course.id}
              />
            )
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={6}>
        {courseData.map((course) => {
          return (
            course.category === "Drawing" && (
              <CourseFilter
                imgsrc={course.imgageUrl}
                courseTitle={course.courseTitle}
                cousreAuthor={course.author}
                courseRating={course.rating}
                review={course.numberOfReview}
                discountPrice={course.discountPrice}
                regularPrice={course.regularPrice}
                sellerBadge={course.bestSellarBadge}
                id={course.id}
              />
            )
          );
        })}
      </TabPanel>
    </Box>
  );
}
