import React from "react";
import style from "./header.module.css";
import userpic from "./images/userpic.jpg";

const Header = () => {
  return (
    <div className={style.header}>
        <nav>
          <form>
            <input
              type="text"
              placeholder="Search..."
              className={style.searchInput}
            />
            <button className={style.button}>
              <i className="fas fa-search"></i>
            </button>
          </form>
          <div className={style.notify}>
            <span className={style.notification}>
              <i
                className="fas fa-bell"
                style={{ color: "grey", padding: "5px" }}
              ></i>
              <sup
                style={{
                  backgroundColor: "red",
                  fontSize: "10px",
                  padding: "5px",
                  borderRadius: "5px",
                  color: "white",
                  display: "inline-block",
                }}
              >
                3+
              </sup>

              <ul
                style={{
                  position: "absolute",
                  width: "300px",
                  marginTop: "0rem",
                  padding: "10px",
                  backgroundColor: "whitesmoke",
                }}
              >
                <li
                  style={{
                    position: "relative",
                    textAlign: "center",
                    fontSize: "12px",
                    backgroundColor: "blue",
                    marginTop: "0rem",
                    padding: "10px",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    color: "white",
                  }}
                >
                  <p className={style.p1}>ALERT CENTER</p>
                </li>
                <hr />
                <li>
                  <div className={style.image4}>
                    <i
                      class="fas fa-file-alt"
                      style={{
                        backgroundColor: "blue",
                        padding: "10px",
                        borderRadius: "50px",
                        color: "white",
                      }}
                    ></i>

                    <div className={style.content1}>December 12, 2019</div>
                  </div>
                  <div className={style.let1}>
                    A new monthly report is ready to download!
                  </div>
                </li>
                <hr />
                <li>
                  <div className={style.image4}>
                    <i
                      class="fas fa-donate"
                      style={{
                        backgroundColor: "green",
                        padding: "10px",
                        borderRadius: "50px",
                        color: "white",
                      }}
                    ></i>

                    <div className={style.content1}>December 7, 2019</div>
                  </div>
                  <div className={style.let1}>
                    $290.29 has been deposited into your account!
                  </div>
                </li>
                <hr />
                <li>
                  <div className={style.image4}>
                    <i
                      class="fas fa-exclamation-triangle "
                      style={{
                        backgroundColor: "yellow",
                        padding: "10px",
                        borderRadius: "50px",
                        color: "white",
                      }}
                    ></i>

                    <div className={style.content1}>December 2, 2019</div>
                  </div>

                  <div className={style.let1}>
                    Spending Alert: We've noticed unusually high spending for
                    your account.
                  </div>
                </li>

                <hr />

                <li
                  style={{
                    textAlign: "center",
                  }}
                >
                  <a
                    href="alert"
                    style={{
                      color: "white",
                      padding: "10",
                      fontSize: "16px",
                      backgroundColor: "black",
                    }}
                  >
                    Show All Alerts
                  </a>
                </li>
              </ul>
            </span>
            <span className={style.notification}>
              <i
                className="fas fa-envelope"
                style={{ color: "grey", padding: "5px" }}
              ></i>
              <sup
                style={{
                  backgroundColor: "red",
                  fontSize: "10px",
                  padding: "5px",
                  borderRadius: "5px",
                  color: "white",
                  display: "inline",
                }}
              >
                7
              </sup>

              <ul
                style={{
                  position: "absolute",
                  
                  width: "300px",
                  marginTop: "0rem",
                  backgroundColor: "whitesmoke",
                }}
              >
                <li
                  style={{
                    position: "relative",
                    textAlign: "center",
                    fontSize: "12px",
                    backgroundColor: "blue",
                    padding: "10px",
                    fontWeight: "bold",
                    letterSpacing: "2px",
                    color: "white",
                  }}
                >
                  <p className={style.p1}>MESSAGE CENTER</p>
                </li>
                <hr />
                <li>
                  <div className={style.image4}>
                    <i
                      className="far fa-user"
                      style={{
                        backgroundColor: "skyblue",
                        padding: "10px",
                        borderRadius: "50px",
                        color: "brown",
                      }}
                    />

                    <div className={style.content2}>
                      Hi there! I am wondering if you ...
                    </div>
                  </div>
                  <div className={style.let2}>Emily Fowler · 58m</div>
                </li>
                <hr />
                <li>
                  <div className={style.image4}>
                    <i
                      className="fas fa-user"
                      style={{
                        backgroundColor: "blue",
                        padding: "10px",
                        borderRadius: "50px",
                        color: "metal",
                      }}
                    />

                    <div className={style.content2}>
                      I have the photos that you ordered ...
                    </div>
                  </div>
                  <div className={style.let2}>Jae Chun · 1d</div>
                </li>
                <hr />
                <li>
                  <div className={style.image4}>
                    <i
                      className="far fa-user"
                      style={{
                        backgroundColor: "yellow",
                        padding: "10px",
                        borderRadius: "50px",
                        color: "red",
                      }}
                    />

                    <div className={style.content2}>
                      Last month's report looks great, I ...
                    </div>
                  </div>
                  <div className={style.let2}>Morgan Alvarez · 2d</div>
                </li>
                <hr />
                <li>
                  <div className={style.image4}>
                    <i
                      className="fas fa-user"
                      style={{
                        backgroundColor: "skyblue",
                        padding: "10px",
                        borderRadius: "50px",
                        color: "blue",
                      }}
                    />

                    <div className={style.content2}>
                      Am I a good boy? The reason I ask is ...
                      <br />
                    </div>
                  </div>
                  <div className={style.let2}>Chicken the Dog · 2w</div>
                </li>
                <hr />
                <li
                  style={{
                    textAlign: "center",
                  }}
                >
                  <a
                    href="read"
                    style={{
                      color: "white",
                      padding: "10",
                      fontSize: "16px",
                      backgroundColor: "black",
                    }}
                  >
                    Read More Messages
                  </a>
                </li>
              </ul>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "center",
            }}
          >
            <div style={{marginTop:'12px'}}>
              <span >
                <a
                  href="user"
                  style={{
                    color: "grey",
                    marnTop: "150px",
                  }}
                >
                  VIMAL RAJ
                </a>
              </span>
            </div>
            <div
              className={style.user}
              style={{
                padding:'5px'
                
              }}
            >
              <span>
                <img src={userpic} alt="user" height="30px" width="30px" />
              </span>
            </div>
          </div>
          </nav>
        </div>
  );
};

export default Header;
