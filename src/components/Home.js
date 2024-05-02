import React from "react";
import textImg from "../Photos/main-text.png";
import "./Home.css";
import frame from "../Photos/Frame 139.png";
import ratingbar from "../Photos/ratingbar.png";
import studentImg from "../Photos/stu-img.png";
import rating from "../Photos/rating.png";
import categoriesImg from "../Photos/categoriesimg.png";
import instituteImg from "../Photos/instituteimg.png";
import institute from "../Photos/institute.png";
import smartgoal from "../Photos/smartgoal.png";
import footer from "../Photos/footer.png";
import footerlast from "../Photos/footerlast.png";
const Home = () => {
  return (
    <div className="main-page-css">
      <div className="main-page">
        <div className="style">
          <div className="text-img">
            <img src={textImg} alt="img" />
          </div>
          <div className="student-img">
            <img src={studentImg} alt="student" />
          </div>
        </div>

        <div className="text-content">
          <p>trusted by over 5 million+ students worldwide since 2003</p>
        </div>

        <div className="rating">
          <img src={rating} alt="rating" />
        </div>

        <div className="ratingbar">
          <img src={ratingbar} alt="ratngbar" />
        </div>
        <div className="categories-img">
          <img src={categoriesImg} alt="categories" />
        </div>
        <div>
          <img src={instituteImg} alt="inst" />
        </div>
        <div className="institute">
          <img src={institute} alt="intst" />
        </div>
        <div className="frame">
          <img src={frame} alt="back" />
        </div>

        <div className="smartgoal">
          <img src={smartgoal} alt="goal" />
        </div>

        <div className="footer">
          <img src={footer} alt="img-desc" />
        </div>
        <div className="footerlast">
          <img src={footerlast} alt="footer" />
        </div>
      </div>
    </div>
  );
};

export default Home;
