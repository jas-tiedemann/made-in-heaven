import React, { useState, useEffect } from "react";
import "./scrollButton.scss";
import { AiOutlineArrowUp } from "react-icons/ai";

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
        <div className="scroll__wrapper">
            <button className="scroll__button" onClick={scrollToTop} style={{display: visible ? "inline" : "none"}}>
                <AiOutlineArrowUp />
            </button>
        </div>
    );
};
export default ScrollButton;