import React from 'react';
import st from './HeaderLinks.module.css'
import {NavLink} from "react-router-dom";

export const HeaderLinks = (props) => {
    return (
    <li className={st.menu}>
        <NavLink to={props.link}>
        <img src={props.url} alt={props.alt}/>
        <span>{props.title}</span>
        </NavLink>
    </li>
    );
};