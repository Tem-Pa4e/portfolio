import React from 'react';
import stContainer from '../../common/style/Container.module.css'
import st from './Footer.module.css'
import {FooterLinks} from "./links/FooterLinks";

export const Footer = () => {
    return (
        <div className={st.footerBlock}>
            <div className={`${stContainer.container} ${st.footerContainer}`}>
                <h2><a href=''>Sasha</a></h2>
                <FooterLinks/>
                <p>© 2022 beingeorge, All Rights Reserved.</p>
            </div>
        </div>

    );
};

