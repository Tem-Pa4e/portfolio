import React from 'react';
import st from "./HeaderPortfolio.module.css";

export const HeaderPortfolio = () => {
    return (
        <div className={st.headerPortfolio}>
            <div>
                <h3>My Works</h3>
            </div>
            <ul className={st.listOfWorks}>
                <li style={{marginLeft: '0'}}>All</li>
                <li>React/JS</li>
                <li>React/TS</li>
                <li>Angular</li>
            </ul>
        </div>
    );
};

