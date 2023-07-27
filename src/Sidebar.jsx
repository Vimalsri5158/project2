/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import images2 from "./images/rocket.png";

import style from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <div className={style.sidebar}>
        <header>
          <i
            className="fa-solid fa-laugh-wink fa-4px"
            style={{ color: "white", fontWeight: "bold" }}
          ></i>
          <h2>
            SB ADMIN<sup>2</sup>
          </h2>
        </header>
        <hr />
        <ul className={style.content1}>
          <li>
            <a href="#" style={{ color: "white", fontSize: "12px" }}>
              <i className="fa-solid fa-tachometer-alt"></i>
              <span style={{ padding: "10px", fontSize: "14px" }}>
                Dashboard
              </span>
            </a>
          </li>
          <hr />
          <li>
            <h4
              style={{
                color: "white",
                opacity: "0.6",
                fontSize: "12px",
                textAlign: "start",
                fontWeight: "bold",
                paddingTop: "10px",
              }}
            >
              INTERFACE
            </h4>
          </li>
          <li>
            <a style={{ color: "white", fontSize: "12px" }} href="#">
              <i className="fas fa-fw fa-cog fa-1x"></i>
              <span style={{ fontSize: "14px", padding: "10px" }}>
                Component
              </span>
              <i
                className="fa-solid fa-circle-chevron-right"
                style={{ marginLeft: "10px" }}
              ></i>
            </a>
            <ul>
              <li>
                <h5 style={{ fontSize: "8px", color: "grey" }}>
                  CUSTOM COMPONENTS:
                </h5>
              </li>
              <li>
                <a href="#">Buttons</a>
              </li>
              <li>
                <a href="#">Cards</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" style={{ color: "white", fontSize: "12px" }}>
              <i className="fas fa-fw fa-wrench "></i>
              <span style={{ fontSize: "14px", padding: "10px" }}>
                Utilities
              </span>
              <i
                style={{
                  marginLeft: "30px",
                }}
                className="fa-solid fa-circle-chevron-right"
              ></i>
            </a>
            <ul>
              <li>
                <h5
                  style={{ fontSize: "8px", textAlign: "start", color: "grey" }}
                >
                  CUSTOM UTILITIES:
                </h5>
              </li>
              <li>
                <a href="#">Colors</a>
              </li>
              <li>
                <a href="#">Borders</a>
              </li>
              <li>
                <a href="#">Animations</a>
              </li>
              <li>
                <a href="#">Others</a>
              </li>
            </ul>
          </li>
          <hr />
          <li>
            <h4
              style={{
                color: "white",
                opacity: "0.6",
                fontSize: "12px",
                textAlign: "start",
                fontWeight: "bold",
                paddingTop: "10px",
              }}
            >
              ADDONS
            </h4>
          </li>
          <li>
            <a style={{ color: "white", fontSize: "12px"}} href="#">
              <i className="fas fa-fw fa-folder"></i>
              <span style={{ fontSize: "14px", padding: "10px" }}>Pages</span>
              <i
                className="fa-solid fa-circle-chevron-right"
                style={{ marginLeft: "40px" }}
              ></i>
            </a>
            <ul>
              <li>
                <h5
                  style={{
                    fontSize: "10px",
                    textAlign: "start",
                    color: "grey",
                  }}
                >
                  LON SCREENS:
                </h5>
              </li>
              <li>
                <a href="#">Lon</a>
              </li>
              <li>
                <a href="#">Rester</a>
              </li>
              <li>
                <a href="#">Forget Password</a>
              </li>
              <li>
                <h5
                  style={{
                    fontSize: "10px",
                    textAlign: "start",
                    color: "grey",
                  }}
                >
                  OTHER PAGES:
                </h5>
              </li>
              <li>
                <a href="#">404 Page</a>
              </li>
              <li>
                <a href="#">Blank Page</a>
              </li>
            </ul>
          </li>
          <li>
            <a style={{ color: "white", fontSize: "12px" }} href="#">
              <i className="fas fa-fw fa-chart-area"></i>
              <span style={{ fontSize: "14px", padding: "10px" }}>Charts</span>
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "white", fontSize: "12px" }}>
              <i className="fas fa-fw fa-table"></i>
              <span style={{ fontSize: "14px", padding: "10px" }}>Tables</span>
            </a>
          </li>
          <hr />
          <li>
            <a
              style={{
                borderBottom: "none",
                textAlign: "center",
                paddingTop: "25px",
              }}
              href="#"
            >
              <i class="fa-solid fa-circle-chevron-left fa-2x"></i>
            </a>
          </li>
          <li>
            <div className={style.footer}>
              <img src={images2} alt="img" width="80px" height="80px" />
              <p
                style={{
                  padding: "10px",
                  color: "whitesmoke",
                  fontSize: "12px",
                }}
              >
                SB Admin Pro is packed with premium features,
                <br /> components, and more!
              </p>
              <button
                style={{
                  backgroundColor: "green",
                  padding: "10px",
                  color: "whitesmoke",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "10px",
                }}
              >
                {" "}
                Upgrade to Pro{" "}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
