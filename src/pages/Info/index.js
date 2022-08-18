import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Utils } from "../../utils/utils";
import "./index.css";

const Info = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const id = parseInt(location.pathname.split("/").pop());
    const [project, setProject] = useState({});
    useEffect(() => {
        Utils.getData("/works/result.json", (datas) => {
            for (const p of datas.list) {
                if (id === p.id) {
                    setProject(p);
                    console.log(p);
                    return;
                }
            }
            navigate("/class1");
        });
    }, [id, navigate]);
    return (
        <div>
            <div className="info-card">
                <div className="info-card-title">作者图片</div>
                <div className="info-card-content">这是是作者的照片</div>
            </div>
            <div className="info-card">
                <div className="info-card-title">作者介绍</div>
                <div className="info-card-content">这里是作者的介绍</div>
            </div>
            <div className="info-card">
                <div className="info-card-title">视频</div>
                <div className="info-card-content">
                    <img className="info-image" src={project.image} alt={project.projectTitle} />
                </div>
            </div>
            <div className="info-card">
                <div className="info-card-title">作品简介</div>
                <div className="info-card-content">{project.info}</div>
            </div>
            <div className="info-detail">
                <div style={{ fontSize: "xx-large" }}>作品详情</div>
                <div className="info-card-detail">{project.detail}</div>
            </div>
        </div>
    );
};

export default Info;
