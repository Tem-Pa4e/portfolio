import React from 'react';
import st from './HeaderLinks.module.css'
import {NavLink} from "react-router-dom";


export const HeaderLinks = (props) => {
    return (
    <li className={st.menuBlock}>
        <NavLink className={({isActive})=> isActive ? st.active : st.linkStyle} to={props.link}>
                <img src={props.url} alt={props.alt}/>
                <span className={st.title}>{props.title}</span>
        </NavLink>
    </li>
    );
};