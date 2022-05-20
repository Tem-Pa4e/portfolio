import React from 'react';
import st from './PortfolioPage.module.css'

import {HeaderPortfolio} from "./headerPortfolio/HeaderPortfolio";
import {DataPortfolio} from "./dataPortfolio/dataPortfolio";

export const PortfolioPage = () => {

    return (
        <div className={st.portfolioContainer}>
            <HeaderPortfolio/>
            <DataPortfolio/>
        </div>
    )
        ;
};

