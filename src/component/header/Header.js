import React from 'react';
import st from './Header.module.css'
import {HeaderLinks} from "./links/HeaderLinks";
import stContainer from '../../common/style/Container.module.css'

export const Header = () => {
    return (
        <div className={st.headerBlock}>
            <div className={`${stContainer.container} ${st.headerContainer}`}>
                <HeaderLinks />
            </div>
        </div>
    );
};

