import React from 'react';
import st from './Header.module.css'
import {HeaderLinks} from "./links/HeaderLinks";
import stContainer from "../../common/style/BasicModules.module.css";
import image from "../../common/pictures/frontend.jpg"


export const Header = () => {

    const menu = [
        {alt: 'home', title: 'Home', url: "http://tokyo.ibthemespro.com/assets/img/svg/home-run.svg"},
        {alt: 'about', title: 'About', url: "http://tokyo.ibthemespro.com/assets/img/svg/avatar.svg"},
        {alt: 'skills', title: 'Skills', url: "http://tokyo.ibthemespro.com/assets/img/svg/paper.svg"},
        {alt: 'myWorks', title: 'My works', url: "http://tokyo.ibthemespro.com/assets/img/svg/briefcase.svg"},
        {alt: 'contact', title: 'Contact', url: "http://tokyo.ibthemespro.com/assets/img/svg/mail.svg"},
    ]
    
    return (
            <div className={st.headerBlock}>
                    <ul>
                        <img className={st.headerLogo} src={image} alt=""/>
                        <div className={st.menuContainer}>
                            {menu.map(m => {
                                return <HeaderLinks url={m.url} title={m.title} alt={m.alt}/>
                            })}
                        </div>
                        <p className={`${stContainer.baseText} ${stContainer.additionalText}`}>© 2022 Grodno <br/>
                            Created byIb-Themes</p>
                    </ul>
            </div>


    );
};

