import React from 'react';
import st from "./FillingForm.module.css";
import stMod from '../../../../../common/style/BasicModules.module.css'

export const FillingForm = () => {
    return (
        <div className={st.contactForm}>
            <h3 className={`${stMod.titleText} ${st.titleText}`}>Contact Us</h3>
            <ul>
                <li><input className={st.contactFormInput} type="text" name={'name'} placeholder={'Name'}/></li>
                <li><input type="text" name={'email'} placeholder={'Email'}/></li>
                <li><textarea name="subject" placeholder={'Message'}></textarea></li>
            </ul>
        </div>
    );
};

