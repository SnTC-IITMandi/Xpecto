import React, { useEffect, useState } from "react";
import styles from "./SponsorsNew.module.css";
import Layout from "./../component/Layout/Layout";
import axios from "axios";
import { ReactComponent as BackToTop } from "../../../svg/backtop-btn.svg";
import { HashLink } from "react-router-hash-link";
import { ThreeCircles } from "react-loader-spinner";

const SponsorsNew = () => {
    const [sponsors, setSponsors] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.dispatchEvent(new Event("scroll"));
    }, [sponsors]);

    const getAllSponsors = async () => {
        try {
            const url = `${process.env.REACT_APP_BACKENDURL}/api/sponsors/`;
            const data = await axios.get(url);
            setSponsors((prev) => data.data.data);

            setIsLoading((prev) => false);
        } catch (err) {
            setIsLoading((prev) => false);
            console.log(err);
        }
    };

    useEffect(() => {
        getAllSponsors();
    }, []);

    const [fixedLogoVisible, setFixedLogoVisible] = useState(false);
    useEffect(() => {
        const scrollEvent = () => {
            if (window.scrollY > window.screen.height / 2) {
                setFixedLogoVisible(true);
            } else {
                setFixedLogoVisible(false);
            }
        };
        window.addEventListener("scroll", scrollEvent, { passive: true });
        return () => {
            window.removeEventListener("scroll", scrollEvent, {
                passive: true,
            });
        };
    }, []);

    return (
        <>
            <HashLink
                smooth
                to="#"
                className={`${styles["back-to-top"]} ${
                    fixedLogoVisible && styles["back-to-top-visible"]
                }`}
            >
                <BackToTop />
            </HashLink>
            <Layout dataColor="#ffbb3c">
                <div className={styles["header"]}>
                    <h1 className={styles["main-heading"]}>OUR SPONSORS</h1>
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
                            innerCircleColor="#ffbb3c"
                            middleCircleColor=""
                        />
                    </div>
                ) : (
                    <main className={styles["container"]}>
                        <div className={styles["sponsors-container"]}>
                            {sponsors.map((spon) => (
                                <SponsorCard {...spon} key={spon._id} />
                            ))}
                        </div>
                    </main>
                )}
            </Layout>
        </>
    );
};

const SponsorCard = ({ name, type, logo }) => {
    return (
        <div className={styles["sponsors-container"]}>
            <div className={styles["sponsor-card"]}>
                <div className={styles["sponsor-card-inner-container"]}>
                    {logo && (
                        <img
                            src={`https://drive.google.com/uc?export=view&id=${
                                logo.split("=")[1]
                            }`}
                            alt={name}
                        />
                    )}
                    <div className={styles["sponsor-name"]}>{name}</div>
                    <div className={styles["sponsor-type"]}>{type}</div>
                </div>
            </div>
        </div>
    );
};
export default SponsorsNew;
