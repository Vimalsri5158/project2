/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import images1 from "./images/projectimage1.png";

import style from "./section.module.css";

const Section = () => {
  return (
    <div className={style.container}>
      <div className={style.section1}>
        <div className={style.heading}>
          <h4>Projects</h4>
        </div>
        <div className={style.body1}>
          <h4 style={{ fontSize: "small", lineHeight: "2rem", color: "grey" }}>
            Server Migration
            <span style={{ float: "right" }}>20%</span>
          </h4>
          <div
            className={style.progressbar1}
            role="progressbar"
            style={{
              width: "20%",
              backgroundColor: "red",
              borderRadius: "8px",
            }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            20%
          </div>
          <h4 style={{ fontSize: "small", lineHeight: "2rem", color: "grey" }}>
            Sales Tracking
            <span style={{ float: "right" }}>40%</span>
          </h4>
          <div
            className={style.progressbar2}
            role="progressbar"
            style={{
              width: "40%",
              backgroundColor: "yellow",
              borderRadius: "8px",
            }}
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            40%
          </div>
          <h4 style={{ fontSize: "small", lineHeight: "2rem", color: "grey" }}>
            Customer Database
            <span style={{ float: "right" }}>60%</span>
          </h4>
          <div
            className={style.progressbar3}
            role="progressbar"
            style={{
              width: "60%",
              backgroundColor: "blue",
              borderRadius: "8px",
            }}
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            60%
          </div>
          <h4 style={{ fontSize: "small", lineHeight: "2rem", color: "grey" }}>
            Payout Details
            <span style={{ float: "right" }}>80%</span>
          </h4>
          <div
            className={style.progressbar4}
            role="progressbar"
            style={{
              width: "80%",
              backgroundColor: "lightBlue",
              borderRadius: "8px",
            }}
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            80%
          </div>
          <h4 style={{ fontSize: "small", lineHeight: "2rem", color: "grey" }}>
            Account Setup
            <span style={{ float: "right" }}>Complete!</span>
          </h4>
          <div
            className={style.progressbar1}
            role="progressbar"
            style={{
              width: "100%",
              backgroundColor: "LightGreen",
              borderRadius: "8px",
            }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            100%
          </div>
        </div>
      </div>

      <div className={style.section3}>
        <div className={style.heading}>
          <h4>Illustrations</h4>
        </div>

        <div className={style.body}>
          <div className={style.illustrationImage}>
            <img src={images1} alt="img" />
          </div>
          <p>
            Add some quality, svg illustrations to your project courtesy of{" "}
            <a
              style={{
                color: "blue",
                justifyContent: "center",
                alignItems: "center",
              }}
              target="_blank"
              rel="nofollow"
              href="https://undraw.co/"
            >
              unDraw
            </a>
            , a constantly updated collection of beautiful svg images that you
            can use completely free and without attribution!
          </p>
          <a
            style={{ color: "blue" }}
            target="_blank"
            rel="nofollow"
            href="https://undraw.co/"
          >
            Browse Illustrations on unDraw →
          </a>
        </div>
      </div>
    </div>
  );
};
export default Section;
