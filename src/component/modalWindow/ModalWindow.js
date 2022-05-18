import React from 'react';
import st from "./ModalWindow.module.css"

export const ModalWindow = ({active, setActive}) => {
    return (

            <div className={active ? `${st.modalBlockActive} ${st.modalBlock}` : st.modalBlock}
                 onClick={() => setActive(false)}>
                <div className={st.modalBox} onClick={(e) => e.stopPropagation()}>
                    <div className={st.closeIcon}>
                        <img onClick={() => setActive(false)}
                             src="http://tokyo.ibthemespro.com/assets/img/svg/cancel.svg" alt=""/>
                    </div>
                    <div className={st.myDescription}>
                        <p style={{margin: '0'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa
                            nemo officiis suscipit.
                            Aliquam delectus ducimus eveniet illo provident rem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa nemo officiis
                            suscipit.
                            Aliquam delectus ducimus eveniet illo provident rem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus ex fugiat
                            impedit
                            iusto magni nisi optio perferendis quam quisquam. Aut blanditiis corporis molestiae officiis
                            quod temporibus totam voluptate! Architecto iure quaerat tempore? Eaque numquam possimus
                            praesentium sit?</p>
                    </div>
                </div>
            </div>


    );
};

