import React from 'react';
import st from './Content.module.css'
import HomePage from "./homePage/HomePage";

const Content = () => {
    return (
        <div className={st.contentBlock}>
                <HomePage />
        </div>
    );
};

export default Content;