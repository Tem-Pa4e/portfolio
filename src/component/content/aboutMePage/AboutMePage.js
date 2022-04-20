import React from 'react';
import myImage from '../../../common/pictures/about.jpg'
import st from './AboutMePage.module.css'
import stMod from '../../../common/style/BasicModules.module.css'

export const AboutMePage = () => {
    return (
        <div className={st.aboutMeBlock}>
            <div className={st.aboutMePhoto}>
                <img src={myImage} alt=""/>
            </div>
            <div>
                <h3 className={`${stMod.titleText} ${st.titleText}`}>Alexander Chumasov & Frontend Developer</h3>
                <div className={st.myDescription}>
                    <div className={st.leftDescription}>
                        <p className={`${stMod.baseText} ${stMod.additionalText}`}> Hello, I am a creative photographer based in New York and happy to travel all over Europe to
                            capture your big day in candid and authentic photos. I will create a lasting memory of the
                            people.</p>
                        <div className={st.aboutMeClicked}>
                            <button>Read More</button>
                        </div>
                    </div>

                    <div className={st.rightDescription}>
                        <ul>
                            <li><p><span>Age:</span>29</p></li>
                            <li><p><span>Birthday:</span>10.12.1992</p></li>
                            <li><p><span>Address:</span>Grodno, Belarus</p></li>
                            <li><p><span>Email:</span><a href="mailto:sashachumasov@gmail.com">sashachumasov@gmail.com</a></p></li>
                            <li><p><span>Phone:</span><a href="tel:+375336868344">+375 33 686 83 44</a></p></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

