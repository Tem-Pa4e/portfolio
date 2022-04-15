import React from 'react';
import st from './Main.module.css'
import stContainer from '../../common/style/Container.module.css'

export const Main = () => {
    return (
        <div className={st.mainBlock}>
            <div className={stContainer.container}>
                <div className={st.text}>
                    <span>Hello</span>
                    <h1>My name is Sasha</h1>
                    <p>Im Frontend Developer</p>
                </div>
                <div className={st.photo}>
                    photo
                </div>
            </div>
        </div>
    );
};

