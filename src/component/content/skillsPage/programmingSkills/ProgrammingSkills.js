import React from 'react';
import st from './ProgrammingSkills.module.css'


export const ProgrammingSkills = () => {
    return (
        <div className={st.skillsBlock}>
            <h3>Programming Skills</h3>
            <div className={st.skillsContainer}>
                <div className={st.skill}>
                    <span><span>JavaScript</span><span style={{float: 'right'}}>60%</span></span>
                    <div className={st.backgroundContainer}>
                        <div style={{height: '100%', width: '60%',background: '#bbb'}}>
                        </div>
                    </div>
                </div>
                <div className={st.skill}>
                    <span><span>TypeScript</span><span style={{float: 'right'}}>80%</span></span>
                    <div className={st.backgroundContainer}>
                        <div style={{height: '100%', width: '80%',background: '#bbb'}}>
                        </div>
                    </div>
                </div>


                <div className={st.skill}>
                    <span><span>React</span><span style={{float: 'right'}}>85%</span></span>
                    <div className={st.backgroundContainer}>
                        <div style={{height: '100%', width: '85%',background: '#bbb'}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

