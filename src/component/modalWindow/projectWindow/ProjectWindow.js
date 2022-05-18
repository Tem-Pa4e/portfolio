import React from 'react';
import st from './ProjectWindow.module.css'


export const ProjectWindow = ({active, setActive,src,arrayPictures}) => {

    return (

        <div className={active ? `${st.modalBlockActive} ${st.modalBlock}` : st.modalBlock}
             onClick={() => setActive(false)}>
            <div className={st.modalBox} onClick={(e) => e.stopPropagation()}>
                <div className={st.closeIcon}>
                    <img onClick={() => setActive(false)}
                         src="http://tokyo.ibthemespro.com/assets/img/svg/cancel.svg" alt=""/>
                </div>
                <div className={st.myDescription}>
                    <button onClick={()=> src[1]}>sadsad</button>

                        <img style={{height: '100%'}} src={src} alt=""/>

                    <button>asdsad</button>
                </div>
            </div>
        </div>


    );
};

