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

                    <img onClick={(e) => {
                        if (value !== allPhotos) {
                            setValue(value + 1)
                        } else {
                            setValue(0)
                        }
                    }} style={{filter: 'invert(1)', width: '35px', backgroundColor: 'white'}}
                         src="https://img.icons8.com/pastel-glyph/344/back.png" alt="dsad"/>

                    <img style={{height: '100%', padding: '0 10px 0 10px'}} src={mainPhoto} alt=""/>

                    <img onClick={(e) => {
                        if (value !== allPhotos) {
                            setValue(value + 1)
                        } else {
                            setValue(0)
                        }
                    }} style={{filter: 'invert(1)', width: '35px', backgroundColor: 'white', borderRadius: '50%'}}
                         src="https://img.icons8.com/pastel-glyph/344/forward.png" alt="dsad"/>
                </div>
            </div>
        </div>


    );
};

