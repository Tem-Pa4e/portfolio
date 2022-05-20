import React from 'react';
import st from "./SliderSkills.module.css";
import Slider from "react-slick";
import jsLogo from "../../../../common/pictures/icons/JSlogo.png";
import reactLogo from "../../../../common/pictures/icons/react_logo_icon_144942.png";
import reduxLogo from "../../../../common/pictures/icons/redux_icon_132038.png";
import storyBooklogo from "../../../../common/pictures/icons/storybook_logo_icon_144839.png";
import materUiLogo from "../../../../common/pictures/icons/material_ui_icon_137419.png";
import bootstrapLogo from "../../../../common/pictures/icons/bootstrap_icon_160388.png";
import angularLogo from "../../../../common/pictures/icons/angular_icon_213572.png";

export const SliderSkills = () => {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div className={st.sliderBlck}>
            <h3 style={{fontWeight: '700', fontSize: '20px', color: 'white'}}>Work with react component library</h3>
            <div className={st.sliderBox}>
                <Slider  {...settings}>
                    <div className={st.container}>
                        <img style={{filter: 'invert(1)',maxWidth: '40%',textAlign: 'center'}} src={jsLogo} alt=""/>
                        <span>JavaScript</span>
                    </div>
                    <div className={st.container}>
                        <img style={{filter: 'invert(1)',maxWidth: '40%'}} src={reactLogo} alt=""/>
                        <span>React</span>
                    </div>
                    <div className={st.container}>
                        <img style={{filter: 'invert(1)',maxWidth: '40%'}} src={reduxLogo} alt=""/>
                        <span>Redux</span>
                    </div>
                    <div className={st.container}>
                        <img style={{filter: 'invert(1)',maxWidth: '40%'}} src={storyBooklogo} alt=""/>
                        <span>StoryBook</span>
                    </div>
                    <div className={st.container}>
                        <img style={{filter: 'invert(1)',maxWidth: '40%'}} src={materUiLogo} alt=""/>
                        <span>Material UI</span>
                    </div>
                    <div className={st.container}>
                        <img style={{filter: 'invert(1)',maxWidth: '40%'}} src={bootstrapLogo} alt=""/>
                        <span style={{textAlign: 'center'}}>Bootstrap</span>
                    </div>
                    <div className={st.container}>
                        <img style={{filter: 'invert(1)',maxWidth: '40%'}} src={angularLogo} alt=""/>
                        <span>Angular</span>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default SliderSkills;