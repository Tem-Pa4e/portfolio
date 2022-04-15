import React from 'react';
import st from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={st.projectBox}>
            <div className={st.projectLogo}>{props.img}</div>
                <h3>{props.title}</h3>
                <span>
                    {props.description}
                </span>


        </div>
    );
};

