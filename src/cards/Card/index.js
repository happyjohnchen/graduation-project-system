import { Card } from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import "./index.css";

const GraduationCard = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <Card
            className="graduation-card"
            title={props.project.name + " : " + props.project.projectTitle}
            onClick={() => {
                navigate(location.pathname + "?id=" + props.project.id);
            }}
        >
            <div>{props.project.info}</div>
            <div style={{ color: "#5555dd", position: "absolute", bottom: "0", right: "10px" }}>
                点击查看详情
            </div>
        </Card>
    );
};

export default GraduationCard;
