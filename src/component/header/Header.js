import React from 'react';
import st from './Header.module.css'
import {HeaderLinks} from "./links/HeaderLinks";
import image from "../../common/pictures/frontend.jpg"


export const Header = () => {

    const menu = [
        {alt: 'home', title: 'Home', url: "http://tokyo.ibthemespro.com/assets/img/svg/home-run.svg", link:'' },
        {alt: 'about', title: 'About', url: "http://tokyo.ibthemespro.com/assets/img/svg/avatar.svg", link:'/aboutMe'},
        {alt: 'skills', title: 'Skills', url: "http://tokyo.ibthemespro.com/assets/img/svg/paper.svg", link:'/skills'},
        {alt: 'portfolio', title: 'Portfolio', url: "http://tokyo.ibthemespro.com/assets/img/svg/briefcase.svg", link:'/portfolio'},
        {alt: 'contact', title: 'Contact', url: "http://tokyo.ibthemespro.com/assets/img/svg/mail.svg", link:'/contact'},
    ]

    return (
        <div className={st.headerBlock}>
            <ul className={st.headerContainer}>
                <img className={st.headerLogo} src={image} alt=""/>
                <div className={st.menuContainer}>
                    {menu.map(m => {
                        return <HeaderLinks link={m.link} url={m.url} title={m.title} alt={m.alt}/>
                    })}
                </div>
                <p className={st.headerDescription}>© 2022 Grodno <br/>
                    Created byIb-Themes</p>
            </ul>
        </div>
    );
};

