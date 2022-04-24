import React from 'react';
import st from './LanguageSkills.module.css'

export const LanguageSkills = () => {
    return (
        <div className={st.skillsBlock}>
            <h3>Language Skills</h3>
            <div className={st.skillsContainer}>
                <div className={st.skill}>
                    <span><span>English</span><span style={{float: 'right'}}>20%</span></span>
                    <div className={st.backgroundContainer}>
                        <div style={{height: '100%', width: '20%',background: '#bbb'}}>
                        </div>
                    </div>
                </div>
                <div className={st.skill}>
                    <span><span>Polish</span><span style={{float: 'right'}}>60%</span></span>
                    <div className={st.backgroundContainer}>
                        <div style={{height: '100%', width: '60%',background: '#bbb'}}>
                        </div>
                    </div>
                </div>
                <div className={st.skill}>
                    <span><span>Russian</span><span style={{float: 'right'}}>90%</span></span>
                    <div className={st.backgroundContainer}>
                        <div style={{height: '100%', width: '90%',background: '#bbb'}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

