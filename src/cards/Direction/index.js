import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./index.css";
import GraduationCard from "../Card";
import { useEffect, useState } from "react";
import { Utils } from "../../utils/utils";
const DirectionCard = (props) => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const id = props.direction.id;
    useEffect(() => {
        Utils.getData("./works/result.json", (datas) => {
            const ans = [];
            for (const direction of datas.directions) {
                if (direction.id === id) {
                    for (const project of direction.projects) {
                        for (const proj of datas.list) {
                            if (project === proj.id) {
                                ans.push(proj);
                            }
                        }
                    }
                }
            }
            setProjects(ans);
        });
    }, [id]);
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
            {projects[0] ? (
                <div className="direction-card-inner">
                    <GraduationCard project={projects[0]} />
                </div>
            ) : null}
            {projects[1] ? (
                <div className="direction-card-inner">
                    <GraduationCard project={projects[1]} />
                </div>
            ) : null}
            {projects[2] ? (
                <div className="direction-card-inner">
                    <GraduationCard project={projects[2]} />
                </div>
            ) : null}
        </div>
    );
};

export default DirectionCard;
