import React from 'react';
import st from "./AboutMeDescription.module.css";
import {LeftDescription} from "./leftDescription/LeftDescription";
import {RightDescription} from "./rightDescription/RightDescription";

export const AboutMeDescription = () => {
    return (
        <div>
            <div className={st.myDescription}>
                <LeftDescription/>
                <RightDescription/>
            </div>
        </div>
    );
};

