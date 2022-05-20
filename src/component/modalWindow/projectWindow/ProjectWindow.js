import React from 'react';
import st from './ProjectWindow.module.css'


export const ProjectWindow = ({active, setActive, mainPhoto, setValue, value, allPhotos}) => {
    return (

        <div className={active ? `${st.modalBlockActive} ${st.modalBlock}` : st.modalBlock}
             onClick={() => setActive(false)}>
            <div className={st.modalBox} onClick={(e) => e.stopPropagation()}>
                <div className={st.closeIcon}>
                    <img onClick={() => setActive(false)}
                         src="http://tokyo.ibthemespro.com/assets/img/svg/cancel.svg" alt=""/>
                </div>
                <div className={st.myDescription}>
                    <button onClick={()=> {
                        console.log("arrLenght", allPhotos)
                        if (value  !== allPhotos) {
                            setValue(value + 1)
                        } else {
                            setValue(0)
                        }
                    }}>sadsad</button>

                        <img style={{height: '100%'}} src={mainPhoto} alt=""/>

                    <button>asdsad</button>
                </div>
            </div>
        </div>


    );
};

