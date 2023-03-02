import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import nightdata from "./nightdata.json";
import styles from "./pronight.module.css";
import { useRef } from "react";
import { useEffect } from "react";
export default function Pronight() {
    const aboutRef = useRef(null);

    useEffect(() => {
        const current = aboutRef.current;
        const scrollEvent = () => {
            const rect = current.getBoundingClientRect();
            const top = rect.top;
            const bottom = rect.bottom;
            const mid = top + current.clientHeight / 2;
            const midIntersecting =
                top <= 100 && mid <= window.screen.height && mid >= 0;
            const isElementVisible =
                top <= 100 && bottom >= window.screen.height;
            if (midIntersecting || isElementVisible) {
                document.body.style.setProperty(
                    "--current-page-color",
                    current.getAttribute("data-color")
                );
            }
        };
        window.addEventListener("scroll", scrollEvent, { passive: true });
        return () => {
            window.removeEventListener("scroll", scrollEvent, {
                passive: true,
            });
        };
    }, [aboutRef]);

    return (
        <div
            className={styles["pronite-container"]}
            ref={aboutRef}
            data-color="#F156FA"
        >
            <p className={styles.heading}> PRONITES</p>
            <Carousel
                navButtonsProps={{
                    style: {
                        padding: "10px", // 1
                        backgroundColor: "#F156FA", // 3
                        color: "black",
                        opacity: 0.75,
                    },
                }}
                // activeIndicatorIconButtonProps={{
                //     style: {
                //         padding: "10px", // 1
                //         backgroundColor: "white", // 3
                //     },
                // }}
            >
                {nightdata.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>
        </div>
    );
}
