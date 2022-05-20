import React from 'react';
import st from './Skills.module.css'
import {ProgrammingSkills} from "./programmingSkills/ProgrammingSkills";
import {LanguageSkills} from "./languageSkills/LanguageSkills";
import SliderSkills from "./sliderSkills/SliderSkills";


export const Skills = () => {
    return (
        <div className={st.boxSkills}>
            <div className={st.boxSkillsContainer}>
                <ProgrammingSkills/>
                <LanguageSkills/>
            </div>
            <SliderSkills/>
        </div>
    );
};

