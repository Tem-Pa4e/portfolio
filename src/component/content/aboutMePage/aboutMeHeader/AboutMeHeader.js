import React from 'react';
import st from "./AboutMeHeader.module.css";
import myImage from "../../../../common/pictures/about.jpg";

export const AboutMeHeader = () => {
    return (
        <div>
            <img className={st.photoBlock} src={myImage} alt=""/>
            <h3 className={st.titleText}>Alexander Chumasov & Frontend Developer</h3>
        </div>
    );
};

