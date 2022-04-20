import React from 'react';
import st from './Contact.module.css'
import {ContactForm} from "./contactForm/ContactForm";


export const Contact = () => {
    return (
        <div className={st.contactBlock}>
           <ContactForm/>
        </div>
    );
};

