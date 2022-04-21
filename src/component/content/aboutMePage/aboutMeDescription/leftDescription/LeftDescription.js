import React from 'react';
import st from "./LeftDescription.module.css";

export const LeftDescription = () => {
    return (
        <div className={st.leftDescription}>
            <p className={st.descriptionText}> Hello, I am a creative photographer based in New York and happy
                to travel all over Europe to
                capture your big day in candid and authentic photos. I will create a lasting memory of the
                people.</p>
            <div className={st.additionalInfo}>
                <button>Read More</button>
            </div>
        </div>
    );
};

