import st from './Skill.module.css'




export const Skill = (props) => {



    return (
        <div className={st.skill}>
            <div className={st.icon}>
                {props.img}
            </div>
            <div>
                <h3>{props.title}</h3>
                <span className={st.description}>{props.description}</span>
            </div>
        </div>
    );
};
