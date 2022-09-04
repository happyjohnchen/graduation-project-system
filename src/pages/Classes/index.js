import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GraduationCard from "../../cards/Card";
import { Utils } from "../../utils/utils";
import "./index.css";

const Classes = (props) => {
    document.title = "毕业设计-" + props.class + "班";
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState({
        directions: [],
        list: [],
    });
    useEffect(() => {
        Utils.getData("./works/result.json", setData);
    }, []);
    return (
        <div className="class-background">
            <div className="class-title-color" />
            <div className="class-title">Class{props.class}</div>
            <div className="class-project-cards">
                {data.list.map((item) =>
                    item.class === props.class ? (
                        <div
                            className="class-graduation-card"
                            key={item.id}
                            onClick={() => navigate(location.pathname + "/" + item.id)}
                        >
                            <GraduationCard project={item} />
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
};

export default Classes;
