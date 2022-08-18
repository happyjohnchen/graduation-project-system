import "./index.css";

const GraduationCard = (props) => {
    return (
        <div
            className="graduation-card"
            title={props.project.name + " : " + props.project.projectTitle}
        >
            <img src={props.project.image} className="graduation-img" alt={ props.project.projectTitle} />
            <div className="graduation-card-text">
                {props.project.name + ": " + props.project.projectTitle}
            </div>
        </div>
    );
};

export default GraduationCard;
