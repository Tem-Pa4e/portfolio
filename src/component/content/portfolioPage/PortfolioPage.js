import React from 'react';
import st from './PortfolioPage.module.css'

export const PortfolioPage = () => {




    return (
        <div className={st.portfolioContainer}>
            <div className={st.headerPortfolio}>
                <div>
                    <h3>My Works</h3>
                </div>

                <ul className={st.listOfWorks}>
                    <li style={{marginLeft: '0'}}>All</li>
                    <li>React/JS</li>
                    <li>React/TS</li>
                    <li>Angular</li>
                </ul>
            </div>
            <div  className={st.listWrapper}>
                <ul>
                        <li>
                            <div>
                                <div>
                                    <img src="http://tokyo.ibthemespro.com/assets/img/portfolio/4.jpg" alt=""/>
                                </div>
                                <div className={st.descriptionListWrapper}>
                                    <h5>todolist</h5>
                                    <span>react</span>
                                </div>
                            </div>
                        </li>

                    <li>
                        <div>
                            <div>
                                <img src="http://tokyo.ibthemespro.com/assets/img/portfolio/4.jpg" alt=""/>
                            </div>
                            <div className={st.descriptionListWrapper}>
                                <h5>todolist</h5>
                                <span>react</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <img src="http://tokyo.ibthemespro.com/assets/img/portfolio/4.jpg" alt=""/>
                            </div>
                            <div className={st.descriptionListWrapper}>
                                <h5>todolist</h5>
                                <span>react</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div>
                                <img src="http://tokyo.ibthemespro.com/assets/img/portfolio/4.jpg" alt=""/>
                            </div>
                            <div className={st.descriptionListWrapper}>
                                    <h5>todolist</h5>
                                    <span>react</span>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div>
                            <div>
                                <img src="http://tokyo.ibthemespro.com/assets/img/portfolio/4.jpg" alt=""/>
                            </div>
                            <div className={st.descriptionListWrapper}>
                                <h5>todolist</h5>
                                <span>react</span>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>


        </div>
    )
        ;
};

