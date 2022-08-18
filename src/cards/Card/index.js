import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";

const GraduationCard = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div
            className="graduation-card"
            title={props.project.name + " : " + props.project.projectTitle}
            onClick={() => {
                navigate(location.pathname + "/" + props.project.id);
            }}
        >
            <div>图片</div>
            <div className="graduation-card-text">{props.project.name + ": " + props.project.projectTitle}</div>
        </div>
    );
};

export default GraduationCard;
