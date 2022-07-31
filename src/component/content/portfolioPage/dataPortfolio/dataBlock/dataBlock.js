import React, {useState} from 'react';
import st from "./dataBlock.module.css";
import {ProjectWindow} from "../../../../modalWindow/projectWindow/ProjectWindow";

export const DataBlock = ({name, image,library, lengthImage}) => {
    const [active, setActive] = useState(false)
    const [arrLength, setArrLength] = useState(0)

    return (
        <ul>
            <li onBlur={()=> setActive(false)}   key={name}>
                <div onClick={() => setActive(true)}  >
                    <div>
                        <img style={{height: '400px'}} src={image[0]}
                             alt=""/>
                    </div>
                    <div className={st.descriptionListWrapper}>
                        <h5>{name}</h5>
                        <span>{library}</span>
                    </div>
                    <ProjectWindow active={active} setActive={setActive} mainPhoto={image[arrLength]}
                                   allPhotos={lengthImage} value={arrLength} setValue={setArrLength}/>
                   </div>
            </li>
        </ul>
    );
};

