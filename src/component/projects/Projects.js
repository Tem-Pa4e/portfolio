import React from 'react';
import st from './Projects.module.css'
import stContainer from '../../common/style/BasicModules.module.css'
import {Project} from "./project/Project";


export const Projects = () => {
    const projects = [
        {img: 'img1', title: 'Social network', description: 'Easy work'},
        {img: 'img2', title: 'Todolist', description: 'Easy work'},
        {img: 'img3', title: 'Counter', description: 'Easy work'},
    ]

    return (
        <div className={st.projectBlock}>
            <div className={`${stContainer.container} ${st.projectsContainer}`}>
                    <h2>My Projects</h2>
                <div className={st.projectBox}>
                    {projects.map(pr => {
                        return <Project title={pr.title} img={pr.img} description={pr.description} />
                    })}
                </div>

            </div>

        </div>
    );
};
