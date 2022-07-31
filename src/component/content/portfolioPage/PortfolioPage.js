import React, {useState} from 'react';
import st from './PortfolioPage.module.css'
import {HeaderPortfolio} from "./headerPortfolio/HeaderPortfolio";
import {DataPortfolio} from "./dataPortfolio/dataPortfolio";
import todoProject1 from "../../../common/pictures/todoProject/image_2022-05-16_20-58-43.png";
import todoProject2 from "../../../common/pictures/todoProject/image_2022-05-16_23-55-35.png";
import countProject1 from '../../../common/pictures/countProject/image_2022-06-02_16-45-58.png'
import countProject2 from '../../../common/pictures/countProject/image_2022-06-02_16-46-15.png'

export const PortfolioPage = () => {
    const todolist = 'Todolist'
    const counter = 'Counter'
    const portfolio = 'Portfolio'
    const [projects, setProjects] = useState([
        {id: 1,name: todolist, library: 'React/TS', images: [todoProject1, todoProject2]},
        {id: 2, name: counter, library: 'React/TS', images: [countProject1, countProject2]},
        {
            id: 3,
            name: portfolio,
            library: 'React/JS',
            images: ["http://tokyo.ibthemespro.com/assets/img/portfolio/4.jpg", "http://tokyo.ibthemespro.com/assets/img/portfolio/4.jpg"]
        },
    ])
    const changeFilter = (value) => {
        setFilter(value)
    }
    const [filter,setFilter] = useState('all')
    let filterProjects = projects
    if (filter === 'React/TS') {
        filterProjects = projects.filter(pr=> pr.library === 'React/TS')
    }
    if (filter === 'React/JS') {
        filterProjects = projects.filter(pr=> pr.library === 'React/JS')
    }
    if (filter === 'Angular') {
        filterProjects = projects.filter(pr=> pr.library === 'Angular')
    }






    return (
        <div className={st.portfolioContainer}>
            <HeaderPortfolio changeFilter={changeFilter} />
            <DataPortfolio filter={filter} projects={filterProjects}/>
        </div>
    )
        ;
};

