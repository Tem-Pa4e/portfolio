import React from 'react';
import st from "./RightDescription.module.css";

export const RightDescription = () => {
    return (
        <div className={st.rightDescription}>
            <ul>
                <li><p><span>Birthday:</span>10.12.1992</p></li>
                <li><p><span>Age:</span>29</p></li>
                <li><p><span>Address:</span>Grodno, Belarus</p></li>
                <li><p><span>Email:</span><a href="mailto:sashachumasov@gmail.com">sashachumasov@gmail.com</a>
                </p></li>
                <li><p><span>Phone:</span><a href="tel:+375336868344">+375 33 686 83 44</a></p></li>
            </ul>
        </div>
    );
};

