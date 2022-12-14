import { useNavigate } from "react-router-dom";
import "./index.css";
import GraduationCard from "../Card";
import { useEffect, useState } from "react";
const DirectionCard = (props) => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const id = props.direction.id;
    useEffect(() => {
        const ans = [];
        for (const direction of props.data.directions) {
            if (direction.id === id) {
                for (const project of direction.projects) {
                    for (const proj of props.data.list) {
                        if (project === proj.id) {
                            ans.push(proj);
                        }
                    }
                }
            }
        }
        setProjects(ans);
    }, [id, props.data.directions, props.data.list]);
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
