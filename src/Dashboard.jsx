/* eslint-disable no-undef */
import React from "react";
import styles from "./dashboard.module.css";

const Dashboard = ({ title, width,image, isAction, children }) => {
  return (
    <div className={styles.width} style={{marginRight:'50px'}}>
      <div className={`${styles.container}`}>
        <div className={styles.head}>{title}<span className={styles.content}>{image}</span></div>
        <div
          style={{
            padding: "20px"
          }}
        >
      {children} 
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
