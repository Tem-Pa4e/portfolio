import React from 'react';
import st from './HeaderLinks.module.css'
import stContainer from "../../../common/style/BasicModules.module.css";

export const HeaderLinks = (props) => {

    return (
    <li className={st.menu}>
        <img src={props.url} alt={props.alt}/>
        <span className={stContainer.baseText}>{props.title}</span>
    </li>
    );
};