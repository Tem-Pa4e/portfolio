import React from 'react';
import st from './dataPortfolio.module.css'
import {DataBlock} from "./dataBlock/dataBlock";

export const DataPortfolio = ({projects, filter}) => {

    let jsxProjects = projects.map(pr=> <DataBlock name={pr.name} image={pr.images} library={pr.library} lengthImage={pr.images.length-1} />)

    return (
        <div className={st.listWrapper}>
            {jsxProjects}
            {/*<DataBlock name={name} image={image} library={library} lengthImage={imageLength} />*/}
        </div>
    );
};

