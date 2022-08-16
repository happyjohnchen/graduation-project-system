import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Utils } from "../../utils/utils";
import "./index.css";

const Info = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.pathname.split("/").pop();
    const [data, setData] = useState({
        list: [],
    });
    const [project, setProject] = useState({});
    useEffect(() => {
        Utils.getData("../works/result.json", (datas) => {
            setData(datas);
            for (const p of datas.list) {
                if (id == p.id) {
                    setProject(p);
                    console.log(p);
                    return;
                }
            }
            navigate("/class1");
        });
    }, [project.id]);
    return (
        <div>
            <div>
                <div className="info-card">
                    <div className="info-card-title">视频</div>
                    <div className="info-card-content">视频内容</div>
                </div>
                <div className="info-card">
                    <div className="info-card-title">作品简介</div>
                    <div className="info-card-content">{project.info}</div>
                </div>
            </div>
            <div>
                <div className="info-card">
                    <div className="info-card-title">作者图片</div>
                    <div className="info-card-content"></div>
                </div>
                <div className="info-card">
                    <div className="info-card-title">作者介绍</div>
                    <div className="info-card-content"></div>
                </div>
            </div>
            <div className="info-detail">
                <div style={{ "font-size": "xx-large" }}>作品详情</div>
                <div>{project.detail}</div>
            </div>
        </div>
    );
};

export default Info;
