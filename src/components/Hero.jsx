import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
import hero_image from "../../src/assets/hero_image.png";
import hero_image_back from "../../src/assets/hero_image_back.png";
import Heart from "../../src/assets/heart.png";
import Calories from "../../src/assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best add */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">SHAPE </span>
            <span>YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/*  figures*/}

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="4" preFix="+" />
            </span>
            <span> FITNESS PROGRAMS</span>
          </div>
        </div>

        {/* hero buttons */}

        <div className="hero-btn">
          <div className="btn">Get Started</div>
          <div className="btn">Learn More</div>
        </div>
      </div>
      <div className="right-r">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116bpn</span>
        </motion.div>
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/* calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burn</span>
            <span>220kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
