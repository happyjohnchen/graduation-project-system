import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GraduationCard from "../../cards/Card";
import { Utils } from "../../utils/utils";
const Direction = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const id = parseInt(location.pathname.split("/").pop());
    const [projects, setProjects] = useState([]);
    const [data, setData] = useState({
        directions: [],
        list: [],
    });
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
            console.log(ans);
        });
    }, []);
    return (
        <>
            <div style={{ float: "left" }}>
                <Button
                    icon={<ArrowLeftOutlined />}
                    onClick={() => navigate("/home")}
                    size="large"
                    type="text"
                ></Button>
            </div>
            <div style={{ display: "inline" }}>
                {projects.map((item) => (
                    <div
                        className="class-graduation-card"
                        key={item.id}
                        onClick={() => navigate("/class" + item.class + "/" + item.id)}
                    >
                        <GraduationCard project={item} />
                    </div>
                ))}
            </div>
        </>
    );
};
export default Direction;
