import React from 'react';
import st from './ContactForm.module.css'
import stContainer from '../../common/style/BasicModules.module.css'

export const ContactForm = () => {
    return (
        <div className={st.contactFormBlock}>
            <div className={`${stContainer.container} ${st.contactFormContainer}`}>
                <h2>Contact</h2>
                <form className={st.contactForm} action="#">

                        <input className={st.contactFormInput} placeholder={'Name'} type="text"/>


                        <input className={st.contactFormInput} placeholder={'E-mail'} type="text"/>


                        <textarea className={st.contactFormArea} placeholder={'Your message'} name="asd" id="asd" cols="30" rows="10"></textarea>

                        <button>send message</button>

                </form>
            </div>

        </div>
    );
};

