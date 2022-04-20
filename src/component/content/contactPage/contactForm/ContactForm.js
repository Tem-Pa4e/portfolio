import React from 'react';
import st from './ContactForm.module.css'
import {FillingForm} from "./fillingForm/FillingForm";

export const ContactForm = () => {
    return (
        <form>
            <div className={st.contactForm}>
                <FillingForm/>
            </div>
            <div className={st.clickedForm}>
                <button>Send Message</button>
            </div>
        </form>
    );
};

