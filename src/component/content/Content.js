import React from 'react';
import st from './Content.module.css'
import {HomePage} from "./homePage/HomePage";
import {Contact} from "./contactPage/Contact";
import {AboutMePage} from "./aboutMePage/AboutMePage";
import {Routes, Route, Navigate} from "react-router-dom";
import {Skills} from "./skillsPage/Skills";

export const Content = () => {
    return (
        <div className={st.contentBlock}>
            <Routes>
                <Route path={'/home'} element={<HomePage/>}/>
                <Route path={'/aboutMe'} element={<AboutMePage/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
                <Route path={'/skills'} element={<Skills/>}/>
                <Route path={'/404'} element={<h1 style={{textAlign: 'center'}}>404 PAGE NOT FOUND</h1>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
        </div>
    );
};
