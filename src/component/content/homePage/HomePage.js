import React from 'react';
import st from './HomePage.module.css'
import stMod from './../../../common/style/BasicModules.module.css'
import imageMe from './../../../common/pictures/me.jpg'
import imageLogo from './../../../common/pictures/logo.jpg'

const HomePage = () => {
    return (
        <div className={st.homePageBlock}>
            <div className={st.homePageContainer}>
                <img className={st.homePageAvatar} src={imageMe} alt=""/>
                <div style={{marginLeft: '80px'}}>
                    <img style={{width: '250px'}} src={imageLogo} alt=""/>
                    <p className={`${stMod.baseText} ${stMod.additionalText} ${st.detailsJob}`}> Creative Photographer based in New York and happy to travel all over Europe to capture photos.</p>
                    <ul className={st.contactLists} >
                        <li><a href=""><img className={st.homePageSvg} src="http://tokyo.ibthemespro.com/assets/img/svg/social/facebook.svg" alt=""/></a></li>
                        <li><a href=""><img className={st.homePageSvg} src="http://tokyo.ibthemespro.com/assets/img/svg/social/instagram.svg" alt=""/></a></li>
                        <li><a href=""><img className={st.homePageSvg} src="https://img.icons8.com/glyph-neue/344/sent.png" alt=""/></a></li>
                        <li><a href=""><img className={st.homePageSvg} src="https://img.icons8.com/ios-filled/344/linkedin-2--v1.png" alt=""/></a></li>
                        <li><a href=""><img className={st.homePageSvg} src="https://img.icons8.com/ios-filled/344/mail.png" alt=""/></a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default HomePage;