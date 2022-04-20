import React from 'react';
import st from "./HomePageContacts.module.css";

export const HomePageContacts = () => {
    return (

            <ul className={st.contactListsBlock}>
                <li ><a href=""><img className={st.contactListsImg}
                    src="http://tokyo.ibthemespro.com/assets/img/svg/social/facebook.svg"
                    alt=""/></a></li>
                <li><a href=""><img className={st.contactListsImg}
                    src="http://tokyo.ibthemespro.com/assets/img/svg/social/instagram.svg"
                    alt=""/></a></li>
                <li><a href=""><img className={st.contactListsImg}
                    src="https://img.icons8.com/glyph-neue/344/sent.png" alt=""/></a></li>
                <li><a href=""><img className={st.contactListsImg}
                    src="https://img.icons8.com/ios-filled/344/linkedin-2--v1.png" alt=""/></a>
                </li>
                <li><a href=""><img className={st.contactListsImg}
                    src="https://img.icons8.com/ios-filled/344/mail.png" alt=""/></a></li>
            </ul>

    );
};

