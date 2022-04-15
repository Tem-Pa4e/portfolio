import React from 'react';
import st from './HeaderLinks.module.css'

export const HeaderLinks = () => {
    return (
        <div className={st.links}>
            <a href="">Главная</a>
            <a href="">Скилы</a>
            <a href="">Работы</a>
            <a href="">О себе</a>
            <a href="">Контакты</a>
        </div>

    );
};