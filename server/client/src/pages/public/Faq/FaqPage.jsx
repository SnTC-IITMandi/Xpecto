import React, { useEffect, useState } from "react";
import styles from "./FaqPage.module.css";
import Layout from "../component/Layout/Layout";
// import MemberCard from "./MemberCard";
import axios from "axios";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { ReactComponent as FixedLogo } from "../../../svg/xpecto-logo.svg";
import { ReactComponent as BackToTop } from "../../../svg/backtop-btn.svg";
import { HashLink } from "react-router-hash-link";
import { ThreeCircles } from "react-loader-spinner";
import { Accordion, AccordionDetails } from "@mui/material";

const FaqPage = () => {
  const [faqs, setFaqs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // fire window scroll event to update scrollbar
    window.dispatchEvent(new Event("scroll"));
  }, [faqs]);

  const tempFaqs = [
    {
      question: "What is Xpecto?",
      answer: "Xpecto is techfest of IIT Mandi",
    },
    {
      question: "Some random question ahhhhh?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est laboriosam, quia dolore explicabo incidunt provident ea omnis quae sint distinctio earum iusto ipsum dolor adipisci laborum facere officia commodi! Perferendis exercitationem ipsam nobis rem reiciendis sint voluptate maiores incidunt minus. Dolores atque quidem iure cum labore, quis quaerat laudantium est.",
    },
  ];

  const getFaqs = async () => {
    try {
      const url = `${process.env.REACT_APP_BACKENDURL}/api/faqs/`;
      const data = await axios.get(url);

      setFaqs((prev) => data.data.data);
      // setFaqs(tempFaqs);
      // console.log();
      setIsLoading((prev) => false);
      // const teamsObj = {};
    } catch (err) {
      // setFaqs(tempFaqs);
      setIsLoading((prev) => true);
      console.log(err);
    }
  };

  useEffect(() => {
    getFaqs();
  }, []);

  return (
    <>
      <Sidebar />
      <div
        className={`${styles["fixed-logo"]} ${styles["fixed-logo-visible"]}`}
      >
        <FixedLogo />
      </div>
      <Layout
        dataColor="#00b4d8"
        // dataColor="#00ddcc"
      >
        <div className={styles["header"]}>
          <h1 className={styles["main-heading"]}>FAQ</h1>
        </div>

        {isLoading ? (
          <div className={styles["loading"]}>
            <ThreeCircles
              height="150px"
              width="150px"
              color="#fff"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor="#00ddcc"
              middleCircleColor=""
            />
          </div>
        ) : (
          <main className={styles["container"]}>
            {tempFaqs.map((faq, index) => {
              return <Faq key={index} faq={faq} />;
            })}
          </main>
        )}
      </Layout>
    </>
  );
};

export default FaqPage;

const Faq = ({ faq }) => {
  const [isAnsVisible, setIsAnsVisible] = useState(false);

  return (
    <Accordion
      expanded={isAnsVisible}
      square={true}
      className={`${styles["faq-container"]} ${
        isAnsVisible && styles["faq-open"]
      }`}
      disableGutters
      onClick={() => {
        setIsAnsVisible((prev) => !prev);
      }}
    >
      <h1 className={styles["faq-question"]}>{faq.question}</h1>
      <AccordionDetails>
        <p className={styles["faq-answer"]}>{faq.answer}</p>
      </AccordionDetails>
    </Accordion>
  );
};
