import React, { useEffect, useState, useRef } from "react";
import styles from "./Time_line.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Time_line = () => {
  const aboutRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const current = aboutRef.current;
    const scrollEvent = () => {
      const rect = current.getBoundingClientRect();
      const top = rect.top;
      const bottom = rect.bottom;
      const mid = top + current.clientHeight / 2;
      const midIntersecting =
        top <= 100 && mid <= window.screen.height && mid >= 0;
      const isElementVisible = top <= 100 && bottom >= window.screen.height;
      if (midIntersecting || isElementVisible) {
        document.body.style.setProperty(
          "--current-page-color",
          current.getAttribute("data-color")
        );
      }
    };
    window.addEventListener("scroll", scrollEvent, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollEvent, { passive: true });
    };
  }, [aboutRef]);
  const [Timeline, setTimeline] = useState([]);
  const [x, setx] = useState(0);
  const [TimelineData, setTimelineData] = useState(Timeline);
  const [activeButton, setActiveButton] = useState("3-03-23");
  const [Heading, setHeading] = useState("DAY 1 [FRIDAY, 3 MARCH 2023]");
  const convertTo24HourFormat = (time) => {
    const [hours, minutes, ampm] = time.split(/:|\s/);
    const isPM = ampm.toLowerCase() === "pm";
    let newHours = parseInt(hours, 10);
    if (isPM && newHours !== 12) {
      newHours += 12;
    } else if (!isPM && newHours === 12) {
      newHours = 0;
    }
    return `${newHours.toString().padStart(2, "0")}:${minutes}`;
  };
  const sortByTime = (data) => {
    const sortedData = [...data].sort((a, b) => {
      const timeA = convertTo24HourFormat(a.eventtime);
      const timeB = convertTo24HourFormat(b.eventtime);
      return new Date(`2000-01-01T${timeA}`) - new Date(`2000-01-01T${timeB}`);
    });
    return sortedData;
  };
  const filterItem = (date) => {
    setActiveButton(date);
    const updatedList = Timeline.filter((curElem) => {

      return curElem.eventdate === date;
    });

    const newList = sortByTime(updatedList);

    if (date == "3-03-23") {
      setHeading("DAY 1 [FRIDAY, 3 MARCH 2023]")
    }
    else if (date == "4-03-23") {
      setHeading("DAY 2 [SATURDAY, 4 MARCH 2023]")
    }
    else {
      setHeading("DAY 3 [SUNDAY, 5 MARCH 2023]")
    }
    setTimelineData(newList);
  };
  const getTimeline = async () => {
    try {

      const url = `${process.env.REACT_APP_BACKENDURL}/api/timeline/`;
      const data = await axios.get(url);

      setTimeline((prev) => data.data.data);
    }
    catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (x == 0) {
      getTimeline();
      setx(1);
    }

  }, [Timeline]);
  useEffect(() => {
    filterItem("3-03-23");
  }, [Timeline]);
  return (
      <>
          <div
              className={styles["time_line_container"]}
              ref={aboutRef}
              data-color="#49fed6"
          >
              <div className={styles["header"]}>
                  <h1 className={styles["time_line-page-heading"]}>TIMELINE</h1>
                  <h1 className={styles["time_line-page-subheading"]}>
                      {Heading}
                      <br />
                      <img
                          className={styles["time_line-page-subheading-line"]}
                          src={`${process.env.PUBLIC_URL}/timeline/line_head.svg`}
                          alt=""
                      />
                  </h1>
              </div>
              <div className={styles["time_line-page-grid"]}>
                  <div className={styles["time_line-page-date"]}>
                      <div
                          className={`${styles.button} ${
                              activeButton === "3-03-23"
                                  ? styles.active
                                  : styles.end
                          }`}
                      >
                          <div
                              className={styles["time_line-page-button"]}
                              onClick={() => filterItem("3-03-23")}
                          >
                              <span>3</span>
                              <br />
                              <span>March</span>
                          </div>
                      </div>
                      <div
                          className={`${styles.button} ${
                              activeButton === "4-03-23"
                                  ? styles.active
                                  : styles.end
                          }`}
                      >
                          <div
                              className={styles["time_line-page-button"]}
                              onClick={() => filterItem("4-03-23")}
                          >
                              <span>4</span>
                              <br />
                              <span>March</span>
                          </div>
                      </div>
                      <div
                          className={`${styles.button} ${
                              activeButton === "5-03-23"
                                  ? styles.active
                                  : styles.end
                          }`}
                      >
                          <div
                              className={styles["time_line-page-button"]}
                              onClick={() => filterItem("5-03-23")}
                          >
                              <span>5</span>
                              <br />
                              <span>March</span>
                          </div>
                      </div>
                  </div>
                  <h1 className={styles["time_line-page-subheading1"]}>
                      {Heading}
                      <br />
                      <img
                          className={styles["time_line-page-subheading-line"]}
                          src={`${process.env.PUBLIC_URL}/timeline/line_head.svg`}
                          alt=""
                      />
                  </h1>
                  <div className={styles["time_line-page-para"]}>
                      <div className={styles["time_line-page-eventgrid"]}>
                          {TimelineData.map((curElem) => {
                              const { eventname, eventtime, venue } = curElem;
                              return (
                                  <React.Fragment key={curElem._id}>
                                      <div>
                                          <div
                                              className={
                                                  styles["time_line-page-event"]
                                              }
                                          >
                                              {eventname} <br /> ({venue})
                                          </div>
                                          <div
                                              className={
                                                  styles["time_line-page-time"]
                                              }
                                          >
                                              {eventtime}
                                          </div>
                                      </div>
                                      <img
                                          className={
                                              styles["time_line-page-para-line"]
                                          }
                                          src={`${process.env.PUBLIC_URL}/timeline/line_head.svg`}
                                          alt=""
                                      />
                                  </React.Fragment>
                              );
                          })}
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
};

export default Time_line;
