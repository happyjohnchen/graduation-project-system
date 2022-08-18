import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./index.css";
const DirectionCard = (props) => {
    const navigate = useNavigate();
    return (
        <div
            className="direction-card-outer"
            onClick={() => {
                navigate("/direction/" + props.direction.id);
            }}
        >
            <div style={{ display: "inline" }}>
                <div className="direction-card-title-color" />
                <div className="direction-card-title">{props.children}</div>
                <Button
                    className="direction-card-title-arrow"
                    icon={<ArrowRightOutlined />}
                    onClick={() => navigate("/direction/" + props.direction.id)}
                    size="large"
                    type="text"
                ></Button>
            </div>
            {props.direction.projects[0] ? (
                <div className="direction-card-inner">
                    <div className="direction-card-text">
                        {props.data.list.map((item) => {
                            return item.id === props.direction.projects[0]
                                ? item.projectTitle
                                : null;
                        })}
                    </div>
                </div>
            ) : null}
            {props.direction.projects[0] ? (
                <div className="direction-card-inner">
                    <div className="direction-card-text">
                        {props.data.list.map((item) => {
                            return item.id === props.direction.projects[1]
                                ? item.projectTitle
                                : null;
                        })}
                    </div>
                </div>
            ) : null}
            {props.direction.projects[0] ? (
                <div className="direction-card-inner">
                    <div className="direction-card-text">
                        {props.data.list.map((item) => {
                            return item.id === props.direction.projects[2]
                                ? item.projectTitle
                                : null;
                        })}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default DirectionCard;
