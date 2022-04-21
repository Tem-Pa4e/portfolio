import React from 'react';
import st from "./HomePageContacts.module.css";

export const HomePageContacts = () => {
    return (

        <ul className={st.contactListsBlock}>
            <li><a href="https://www.facebook.com/sashachumasov92/"><img className={st.contactListsImg}
                                                                         src="http://tokyo.ibthemespro.com/assets/img/svg/social/facebook.svg"
                                                                         alt=""/></a></li>
            <li><a href="https://www.instagram.com/tem_pa4e/"><img className={st.contactListsImg}
                                                                   src="http://tokyo.ibthemespro.com/assets/img/svg/social/instagram.svg"
                                                                   alt=""/></a></li>
            <li><a href="https://t.me/temPa4e"><img className={st.contactListsImg}
                                                    src="https://img.icons8.com/glyph-neue/344/sent.png" alt=""/></a>
            </li>
            <li><a href="https://www.linkedin.com/in/sasha-chumasov-a910ba226/"><img className={st.contactListsImg}
                                                                                     src="https://img.icons8.com/ios-filled/344/linkedin-2--v1.png"
                                                                                     alt=""/></a>
            </li>
            <li><a href=""><img className={st.contactListsImg}
                                src="https://img.icons8.com/ios-filled/344/mail.png" alt=""/></a></li>
            <li><a href="https://github.com/Tem-Pa4e"><img className={st.contactListsImg}
                                                           src="https://img.icons8.com/metro/344/github.png"
                                                           alt=""/></a></li>
        </ul>

    );
};

