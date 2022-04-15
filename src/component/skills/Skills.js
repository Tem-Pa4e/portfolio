import React from 'react';
import stContainer from '../../common/style/Container.module.css'
import st from './Skills.module.css'
import {Skill} from './skill/Skill'

export const Skills = () => {
    const skills = [
        {img: 'img1', title: 'JS', description: 'dont understand'},
        {img: 'img2', title: 'React', description: 'ready'},
        {img: 'img3', title: 'CSS', description: 'ready'},
    ]
    return (
        <div className={st.skillsBlock}>
            <div className={`${stContainer.container} ${st.skillsContainer} `}>
                <h2 className={st.title}>My skills</h2>
                <div className={st.skills}>
                    {skills.map(sk => {
                        return <Skill title={sk.title} description={sk.description} img={sk.img}/>
                    })
                    }

                </div>
            </div>
        </div>
    );
};
