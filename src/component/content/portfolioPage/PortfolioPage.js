import React, {useState} from 'react';
import st from './PortfolioPage.module.css'
import todoProject1 from '../../../common/pictures/todoProject/image_2022-05-16_20-58-43.png'
import todoProject2 from '../../../common/pictures/todoProject/image_2022-05-16_23-55-35.png'
import {ProjectWindow} from "../../modalWindow/projectWindow/ProjectWindow";

export const PortfolioPage = () => {

    const [active,setActive] = useState(false)

    const [todoImg,setTodoImg] = useState([todoProject1,todoProject2])

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
                        <li onClick={()=> setActive(true)}>
                            <div>
                                <div>
                                        <img style={{height:'400px'}} src={todoProject1} alt=""/>
                                </div>
                                <div className={st.descriptionListWrapper}>
                                    <h5>todolist</h5>
                                    <span>react</span>
                                </div>
                            </div>
                            <ProjectWindow active={active} setActive={setActive} src={setTodoImg(todoImg.filter(item=> item[0]))} arrayPictures={todoProject2}/>
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

