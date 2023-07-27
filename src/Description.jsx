import React from "react";

import style from "./description.module.css";

const Description = () => {
  return (
    <div className={style.container}>
      <div className={style.section2}>
        <div className={style.cardcontent}>
          <div className={style.card} style={{ backgroundColor: "blue" }}>
            <div className={style.h}>
              Primary
              <div className={style.p}>#4e73df</div>
            </div>
          </div>

          <div className={style.card} style={{ backgroundColor: "Lightblue" }}>
            <div className={style.h}>
              Info
              <div className={style.p}>#36b9cc</div>
            </div>
          </div>

          <div className={style.card} style={{ backgroundColor: "red" }}>
            <div className={style.h}>
              Danger
              <div className={style.p}>#e74a3b</div>
            </div>
          </div>

          <div
            className={style.card}
            style={{ backgroundColor: "whiteSmoke", color: "black" }}
          >
            <div className={style.h}>
              Light
              <div className={style.p}>#f8f9fc</div>
            </div>
          </div>

          <div className={style.card} style={{ backgroundColor: "Lightgreen" }}>
            <div className={style.h}>
              Success
              <div className={style.p}>#1cc88a</div>
            </div>
          </div>

          <div className={style.card} style={{ backgroundColor: "orange" }}>
            <div className={style.h}>
              Warning
              <div className={style.p}>#f6c23e</div>
            </div>
          </div>

          <div
            className={style.card}
            style={{ backgroundColor: "Lightgrey", color: "black" }}
          >
            <div className={style.h}>
              Secondary
              <div className={style.p}>#858796</div>
            </div>
          </div>

          <div className={style.card} style={{ backgroundColor: "grey" }}>
            <div className={style.h}>
              Dark
              <div className={style.p}>#5a5c69</div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.section4}>
        <div className={style.heading}>
          <h4>Development Approach</h4>
        </div>
        <div className={style.body}>
          <p>
            SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
            order to reduce CSS bloat and poor page performance. Custom CSS
            classes are used to create custom components and custom utility
            classes.
          </p>
          <p>
            Before working with this theme, you should become familiar with the
            Bootstrap framework, especially the utility classes.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Description;
