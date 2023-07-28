/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import style from "./content.module.css";
import Dashboard from "./Dashboard";
import LineChart from "./Charts/Line";
import DoughnutChart from "./Charts/Doughnut";

const Content = () => {
  return (
    <>
    <div className={style.container}>
      <div className={style.content}>
        <h2
          style={{
            color: "grey",
            fontWeight: "bold",
            fontSize: "25px",
            paddingRight: "300px",
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
          <div className={style.card} style={{borderLeft: '0.25rem solid blue'}}>
            <div className={style.cardcontent}>
              <div className={style.title} style={{color:'blue'}}>EARNINGS (MONTHLY)</div>
              <div className={style.number}>$40,000</div>
              <div className={style.icons}>
                <i class="fas fa-calendar fa-2x"></i>
              </div>
            </div>
          </div>

          <div className={style.card} style={{ borderLeft: '0.25rem solid green' }}>
            <div className={style.cardcontent}>
              <div className={style.title} style={{color:'green'}}>EARNINGS (ANNUAL)</div>
              <div className={style.number}>$215,000</div>
              <div className={style.icons}>
                <i class="fas fa-dollar-sign fa-2x"></i>
              </div>
            </div>
          </div>

          <div className={style.card} style={{ borderLeft: '0.25rem solid red' }}>
            <div className={style.cardcontent}>
              <div className={style.title} style={{color:'red'}}>TASKS</div>
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
            style={{  borderLeft: '0.25rem solid orange' }}
          >
            <div className={style.cardcontent}>
              <div className={style.title} style={{color:'orange'}}>PENDING REQUESTS</div>
              <div className={style.number}>18</div>
              <div className={style.icons}>
                <i class="fas fa-comments fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div
        style={{
          display:'flex',
          top: "100px",
          left: "200px",
          position: "relative",

        }}
        className="container"
    
      >
        <Dashboard
          title={"Earning Overview"}
          image={<i class="fa-solid fa-ellipsis-vertical"></i>}
          width={"col-12 col-sm-12 col-md-8 "}
        >
          <div className={style.chart1} style={{display:'flex'}}>
            <LineChart />
          </div>
        </Dashboard>
        <Dashboard 
        title={"Revenue Sources"} 
        image={<i class="fa-solid fa-ellipsis-vertical"></i>}
        width={"col-12 col-sm-12 col-md-4"}
        >
          <div className={style.chart2} >
            <DoughnutChart />
          </div>
        </Dashboard>
      </div>
      
    </>
  );
};

export default Content;
