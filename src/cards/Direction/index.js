import { useNavigate } from "react-router-dom";
import "./index.css";
const DirectionCard = (props) => {
    const navigate = useNavigate();
    return (
        <div
            className="direction-card-outer"
            onClick={() => {
                navigate("/direction/" + props.direction);
            }}
        >
            <div style={{ display: "inline" }}>
                <div className="direction-card-title-color" />
                <div className="direction-card-title">{props.children}</div>
                <div className="direction-card-title-arrow"></div>
            </div>
            <div className="direction-card-inner">
                <div className="direction-card-text">text</div>
            </div>
            <div className="direction-card-inner">
                <div className="direction-card-text">text</div>
            </div>
            <div className="direction-card-inner">
                <div className="direction-card-text">text</div>
            </div>
        </div>
    );
};

export default DirectionCard;
