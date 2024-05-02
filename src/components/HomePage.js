import React, { useState } from "react";
import "./HomePage.css";
import { IoIosSearch } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { PiYoutubeLogo } from "react-icons/pi";

import stuImage from "../image/Ellipse 3.png";
import image1 from "../Photos/Group 106.png";
import image2 from "../Photos/Group 107.png";
import image3 from "../Photos/Group 108.png";
import image4 from "../Photos/Group 109.png";
import image5 from "../Photos/Group 110.png";
import image6 from "../Photos/Group 111.png";
import image7 from "../Photos/Group 112.png";
import image8 from "../Photos/Group 113.png";
import imag from "../Photos/Frame 135.png";
import img1 from "../image/Rectangle 24.png";
import img2 from "../image/Rectangle 25.png";
import img3 from "../image/Rectangle 29.png";
import img4 from "../image/video__1080p__AdobeExpress 1.png";
import img5 from "../image/Rectangle 26.png";
import img6 from "../image/Rectangle 30.png";
import img7 from "../image/701881379__1080p__AdobeExpress 1.png";
import img8 from "../image/imggg.png";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <div>
      <div className="homepage">
        <header>
          <nav>
            <ul>
              <li>
                <h3>Smart </h3>
                <h3>Academy</h3>

                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/shop">SHOP</a>
              </li>
              <li>
                <a href="/blogs">BLOGS</a>
              </li>
              <li>
                <a href="/courses">COURSES</a>
              </li>
              <li>
                <a href="/courses">{<BiCategory />}Catgories</a>
              </li>
            </ul>
          </nav>
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="&#128269; Search for courses..." // Using HTML entity for search icon
              value={searchTerm}
              onChange={handleChange}
            />
          </form>
        </header>
        <div>
          <div class="main">
            <span class="main-css">
              <p>100% satisfaction guarantee</p>
              <h1>Learn Skills From Our Top Instructor</h1>
              <p>
                Enhance your skills with guidance from our premium instructor.
                Our website offers a unique opportunity to learn from the best,
                gaining expertise in various fields.
              </p>
              <span className="btn">
                <button className="btn-1">Sign Up Now</button>
                <button className="btn-2">
                  {<PiYoutubeLogo />}How it Work
                </button>
              </span>
              <p>trustedBy over 5 Million+ Students word wide science 2003</p>
            </span>
            <img src={stuImage} alt="img2" />
          </div>
          <span className="helll"> </span>

          <div className="util">
            <span className="util-css">
              <h1>Our Top Catagories </h1>
              <p>
                Explore Global Explore Who Are Leading In Their Fields,offering
                Unparallel Knowledge And Guidence As Top instructure{" "}
              </p>
              <div class="row">
                <div class="column">
                  <img src={image1} alt="img1" class="fullscreen-image" />
                  <img src={image2} alt="img2" class="fullscreen-image" />
                  <img src={image3} alt="img3" class="fullscreen-image" />
                  <img src={image4} alt="img4" class="fullscreen-image" />
                  <img src={image5} alt="img5" class="fullscreen-image" />
                  <img src={image6} alt="img6" class="fullscreen-image" />
                  <img src={image7} alt="img7" class="fullscreen-image" />
                  <img src={image8} alt="img8" class="fullscreen-image" />
                </div>
              </div>
            </span>
          </div>

          <div class="discover">
            <div class="discover-css">
              <p>Get to know about us</p>
              <h1>Discover top Instructors Around The World</h1>
              <p>
                Explore Global Experts Who Are Leading In Their Field, Offering
                Unparalleled Knowledge And Guidance As Top Instructors From
                Every Corner Of the World.
              </p>
              <button>Explore More</button>
            </div>
            <div class="image-container">
              <img src={img1} alt="Image6" />
              <img src={img2} alt="Image7" />
              <img src={img3} alt="Image8" />
              <img src={img4} alt="Image4" />
              <img src={img5} alt="Image5" />
              <img src={img6} alt="Image6" />
              <img src={img7} alt="Image6" />
              <img className="img8" src={img8} alt="Image6" />
            </div>
          </div>
        </div>
        <div className="styl">
          <div className="styl_css">
            <h1>These Institute Trust Us </h1>

            <p>
              Institute Rely On Our Experties ,And Proven Track Reacord. Trust
              Us For Innovative Solutions And Reliable Support .
            </p>
            <img src={imag} alt="img" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-css">
          <h3>Learn From The Best Instructore</h3>
          <p>
            Learn From Bset Instructors To Gain Inshights ,Masters Skills And
            Excel In Your Endeover .Their Experties Accerierators Your Progress
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
