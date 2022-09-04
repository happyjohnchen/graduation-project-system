import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GraduationCard from "../../cards/Card";
import { Utils } from "../../utils/utils";
import "./index.css";
const Direction = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const id = parseInt(location.pathname.split("/").pop());
    const [data, setData] = useState({ directions: [] });
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        Utils.getData("/works/result.json", (datas) => {
            setData(datas);
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
        <>
            <div className="direction-back-color">
                <Button
                    icon={<ArrowLeftOutlined />}
                    onClick={() => navigate("/home")}
                    size="large"
                    type="text"
                ></Button>
            </div>
            <div className="direction-title-color" />
            <div className="direction-title">
                {data.directions.map((item) => {
                    if (item.id === id) {
                        document.title = "毕业设计-" + item.title;
                        return item.title;
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="direction-background">
                {projects.map((item) => (
                    <div
                        className="direction-graduation-card"
                        key={item.id}
                        onClick={() => navigate("/class" + item.class + "/" + item.id)}
                    >
                        <GraduationCard project={item} />
                    </div>
                ))}
                <div className="direction-count-text">共{projects.length}条</div>
            </div>
        </>
    );
};
export default Direction;
