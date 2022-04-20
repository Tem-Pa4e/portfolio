import React from 'react';
import st from './HomePage.module.css'
import {HomePageContacts} from "./homePageContacts/HomePageContacts";
import {HomePageAvatar} from "./homePageAvatar/HomePageAvatar";
import {HomeDescriptionText} from "./homeDescriptionText/HomeDescriptionText";
import {HomeLogoName} from "./homeLogoName/HomeLogoName";

export const HomePage = () => {
    return (
        <div className={st.homePageBlock}>
            <div className={st.homePageContainer}>
                <HomePageAvatar />
                <div className={st.homePageAdition}>
                    <HomeLogoName/>
                    <HomeDescriptionText />
                    <HomePageContacts />
                </div>
            </div>

        </div>
    );
};

