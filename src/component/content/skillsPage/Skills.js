import React from 'react';
import st from './Skills.module.css'

export const Skills = () => {
    return (
        <div>
            <div className={st.boxSkills}>
                <div className={st.leftBoxContainer}>
                    <h3 style={{margin: '0'}}>Programming Skills</h3>
                    <div className={st.leftBoxBlock}>
                        <div className={st.skill}>
                            <span><span>JS</span><span style={{float: 'right'}}>95%</span></span>
                            <div className={st.backgroundContainer}>
                                <div style={{height: '100%', width: '65%',background: '#bbb'}}>
                                </div>
                            </div>
                        </div>
                        <div className={st.skill}>
                            <span><span>CSS&HTML</span><span style={{float: 'right'}}>95%</span></span>
                            <div className={st.backgroundContainer}>
                                <div style={{height: '100%', width: '95%',background: '#bbb'}}>
                                </div>
                            </div>
                        </div>
                        <div className={st.skill}>
                            <span><span>TypeScript</span><span style={{float: 'right'}}>95%</span></span>
                            <div className={st.backgroundContainer}>
                                <div style={{height: '100%', width: '95%',background: '#bbb'}}>
                                </div>
                            </div>
                        </div>
                        <div className={st.skill}>
                            <span><span>React</span><span style={{float: 'right'}}>95%</span></span>
                            <div className={st.backgroundContainer}>
                                <div style={{height: '100%', width: '95%',background: '#bbb'}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={st.rightBox}></div>
            </div>
        </div>
    );
};

