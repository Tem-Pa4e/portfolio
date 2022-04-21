import React from 'react';
import st from './AboutMePage.module.css'
import {AboutMeHeader} from "./aboutMeHeader/AboutMeHeader";
import {AboutMeDescription} from "./aboutMeDescription/AboutMeDescription";


export const AboutMePage = () => {
    return (
        <div className={st.aboutMeBlock}>
            <AboutMeHeader/>
            <AboutMeDescription/>
        </div>
    );
};

