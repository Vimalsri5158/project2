/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import style from "./content.module.css";
import Dashboard from "./Dashboard";
import LineChart from "./Charts/Line";
import DoughnutChart from "./Charts/Doughnut";

const Content = () => {
  return (
    <>
      <div className={style.content}>
        <h2
          style={{
            color: "grey",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          Dashboard
        </h2>
        <button
          style={{
            
            backgroundColor: "blue",
            padding: "10px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            marginLeft: "55rem",
            border: "5px",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-download fa-sm"></i>
          <span style={{ padding: "2px" }}>Generate Report</span>
        </button>
      </div>

      <div className={style.main}>
        <div className={style.cards}>
          <div className={style.card} style={{ backgroundColor: "lightgreen" }}>
            <div className={style.cardcontent}>
              <div className={style.title}>EARNINGS (MONTHLY)</div>
              <div className={style.number}>$40,000</div>
              <div className={style.icons}>
                <i class="fas fa-calendar fa-2x"></i>
              </div>
            </div>
          </div>

          <div className={style.card} style={{ backgroundColor: "skyblue" }}>
            <div className={style.cardcontent}>
              <div className={style.title}>EARNINGS (ANNUAL)</div>
              <div className={style.number}>$215,000</div>
              <div className={style.icons}>
                <i class="fas fa-dollar-sign fa-2x"></i>
              </div>
            </div>
          </div>

          <div className={style.card} style={{ backgroundColor: "lightgrey" }}>
            <div className={style.cardcontent}>
              <div className={style.title}>TASKS</div>
              <div className={style.number}>
                <label for="file">50%</label>
                <progress
                  id="file"
                  value="50"
                  max="100"
                  className={style.progress}
                ></progress>
              </div>

              <div className={style.icons}>
                <i class="fas fa-clipboard-list fa-2x"></i>
              </div>
            </div>
          </div>

          <div
            className={style.card}
            style={{ backgroundColor: "greenyellow" }}
          >
            <div className={style.cardcontent}>
              <div className={style.title}>PENDING REQUESTS</div>
              <div className={style.number}>18</div>
              <div className={style.icons}>
                <i class="fas fa-comments fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          
          display: "flex",
          flexWrap: "nowrap",
          padding: "24px",
          top: "50%",
        }}
        className="container-fluid"
      >
        <Dashboard
          title={"Earning Overview"}
          image={<i class="fa-solid fa-ellipsis-vertical"></i>}
          width={"col-12 col-sm-12 col-md-12 "}
        >
          <div className={style.chart1}>
            <LineChart />
          </div>
        </Dashboard>
        <Dashboard 
        title={"Revenue Sources"} 
        image={<i class="fa-solid fa-ellipsis-vertical"></i>}
        width={"col-12"}>
          <div className={style.chart2}>
            <DoughnutChart />
          </div>
        </Dashboard>
      </div>
    </>
  );
};

export default Content;
