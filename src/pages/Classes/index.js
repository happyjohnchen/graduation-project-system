import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GraduationCard from "../../cards/Card";
import { Utils } from "../../utils/utils";
import "./index.css";

const Classes = (props) => {
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
        <div>
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
    );
};

export default Classes;
