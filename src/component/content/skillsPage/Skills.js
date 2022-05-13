import React from 'react';
import st from './Skills.module.css'
import materUiLogo from '../../../common/pictures/material_ui_icon_137419.png'
import reduxLogo from '../../../common/pictures/redux_icon_132038.png'
import {ProgrammingSkills} from "./programmingSkills/ProgrammingSkills";
import {LanguageSkills} from "./languageSkills/LanguageSkills";
import reactLogo from '../../../common/pictures/react_logo_icon_144942.png'
import bootstrapLogo from '../../../common/pictures/bootstrap_icon_160388.png'
import angularLogo from '../../../common/pictures/angular_icon_213572.png'


export const Skills = () => {
    return (
            <div className={st.boxSkills}>
                <div className={st.boxSkillsContainer}>
                    <ProgrammingSkills/>
                    <LanguageSkills/>
                </div>
                <div style={{width: '100%', height: 'auto', clear: 'both', float: 'left'}}>
                    <h3 style={{fontWeight: '700', fontSize: '20px'}}>Work with react component library</h3>
                    <ul>
                        <div style={{position: 'relative',display: 'flex',width: '100%',marginTop: '20px'}}>
                            <div>

                            </div>
                            <button className={st.btnLeft}></button>
                            <div style={{width: '100%'}}>
                                <div className={st.transformDiv}>
                                    <div style={{width: '100%', display: 'flex'}}>
                                        <li style={{width: '10%', display: 'inline-block', textAlign: 'center', marginRight: '65px'}}>
                                            <img style={{filter: 'invert(1)',maxWidth: '100%'}} src={materUiLogo} alt=""/>
                                            <span>MaterialUI</span>
                                        </li>
                                        <li style={{width:'10%', display: 'inline-block', textAlign: 'center', marginRight: '65px'}}>
                                            <img style={{filter: 'invert(1)',maxWidth: '100%'}} src={reduxLogo} alt=""/>
                                            <span>Redux</span>
                                        </li>
                                        <li style={{width:'10%', display: 'inline-block', textAlign: 'center', marginRight: '65px'}}>
                                            <img style={{filter: 'invert(1)',maxWidth: '100%'}} src={reactLogo} alt=""/>
                                            <span>React</span>
                                        </li>
                                        <li style={{width:'10%', display: 'inline-block', textAlign: 'center', marginRight: '65px'}}>
                                            <img style={{filter: 'invert(1)',maxWidth: '100%'}} src={bootstrapLogo} alt=""/>
                                            <span>Bootstrap</span>
                                        </li>
                                        <li style={{width:'10%', display: 'inline-block', textAlign: 'center'}}>
                                                    <img style={{filter: 'invert(1)',maxWidth: '100%'}} src={angularLogo} alt=""/>
                                                    <span>Angular</span>
                                                </li>
                                    </div>
                                </div>
                            </div>
                            <button className={st.btnRight}></button>
                        </div>
                    </ul>
                </div>

            </div>

    );
};

