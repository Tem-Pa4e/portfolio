import React from 'react';
import st from "./HeaderPortfolio.module.css";

export const HeaderPortfolio = ({changeFilter}) => {

    const onChangeAllFilter = () => {
        changeFilter('All')
    }
    const onChangeJSFilter = () => {
        changeFilter('React/JS')
    }
    const onChangeTSFilter = () => {
        changeFilter('React/TS')
    }
    const onChangeAngularFilter = () => {
        changeFilter('Angular')
    }

    return (
        <div className={st.headerPortfolio}>
            <div>
                <h3>My Works</h3>
            </div>
            <ul className={st.listOfWorks}>
                <li style={{marginLeft: '0'}} onClick={onChangeAllFilter}>All</li>
                <li onClick={onChangeJSFilter}>React/JS</li>
                <li onClick={onChangeTSFilter}>React/TS</li>
                <li onClick={onChangeAngularFilter}>Angular</li>
            </ul>
        </div>
    );
};

