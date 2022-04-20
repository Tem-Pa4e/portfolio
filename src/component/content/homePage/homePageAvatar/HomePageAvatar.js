import React from 'react';
import imageMe from "../../../../common/pictures/me.jpg";
import st from './HomePageAvatar.module.css'

export const HomePageAvatar = () => {
    return (
        <img className={st.avatar} src={imageMe} alt=""/>
    );
};

