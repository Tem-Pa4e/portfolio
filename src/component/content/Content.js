import React from 'react';
import st from './Content.module.css'
import {HomePage} from "./homePage/HomePage";
import {Contact} from "./contactPage/Contact";
import {AboutMePage} from "./aboutMePage/AboutMePage";

export const Content = () => {
    return (
        <div className={st.contentBlock}>
            {/*<HomePage/>*/}
            {/*<Contact/>*/}
            <AboutMePage/>
        </div>
    );
};
