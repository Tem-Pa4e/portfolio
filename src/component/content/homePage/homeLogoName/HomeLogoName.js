import React from 'react';
import st from "./HomeLogoName.module.css";
import imageLogo from "../../../../common/pictures/logo.jpg";

export const HomeLogoName = () => {
    return (
        <img className={st.logo} src={imageLogo} alt=""/>
    );
};
