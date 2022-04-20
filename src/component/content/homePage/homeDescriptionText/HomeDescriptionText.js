import React from 'react';
import stMod from "../../../../common/style/BasicModules.module.css";
import st from "./HomeDescriptionText.module.css";

export const HomeDescriptionText = () => {
    return (
        <p className={`${stMod.baseText} ${stMod.additionalText} ${st.details}`}>Creative Photographer
            based in New York and happy to travel all over Europe to capture photos.</p>
    );
};

