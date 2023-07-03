import React, { useState, useEffect } from "react";
import arrowUpScroll from "../../assets/vectors/arrow-up-scroll.svg";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const scrollToTop = () =>{
        const top = document.getElementById("start");
        top.scrollIntoView();
    };

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 100) {
                setVisible(true)
            } else if (scrolled <= 100) {
                setVisible(false)
            }
        };
        
        window.addEventListener("scroll", toggleVisible);
    }, []);

    return (
        <div className="scroll-wrapper">
            <button className="scroll__button" onClick={scrollToTop} style={{display: visible ? "inline" : "none"}}>
                <img src={arrowUpScroll} alt="arrow-up-scroll" className="icon--large"></img>
            </button>
        </div>
    );
}

export default ScrollButton;