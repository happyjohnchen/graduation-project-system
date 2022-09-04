import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Utils } from "../../utils/utils";
import "./index.css";

const Info = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const id = parseInt(location.pathname.split("/").pop());
    const [project, setProject] = useState({ images: [] });
    useEffect(() => {
        Utils.getData("/works/result.json", (datas) => {
            for (const p of datas.list) {
                if (id === p.id) {
                    setProject(p);
                    console.log(p);
                    document.title = "毕业设计-" + p.name;
                    return;
                }
            }
            navigate("/class1");
        });
    }, [id, navigate]);
    return (
        <div>
            <div className="info-card">
                <div className="info-card-title">作品图片</div>
                <div className="info-card-content">
                    <img className="info-image" src={project.image} alt={project.projectTitle} />
                </div>
            </div>
            <div className="info-card">
                <div className="info-card-title">作者介绍</div>
                <div className="info-card-content">
                    <div className="info-intro">
                        姓名: {project.name}
                        <br />
                        班级: 1908121{project.class}班
                        <br />
                        专业: 数字媒体技术
                        <br />
                        指导老师: {project.teacher}
                    </div>
                </div>
            </div>
            <div className="info-card">
                <div className="info-card-title">视频</div>
                <div className="info-card-content">
                    <video className="info-video" src={project.video} controls={true} />
                </div>
            </div>
            <div className="info-card">
                <div className="info-card-title">作品简介</div>
                <div className="info-card-content">
                    <div className="info-project">
                        作品题目: {project.projectTitle}
                        <br />
                        作品综述: {project.info}
                    </div>
                </div>
            </div>
            <div className="info-detail">
                <div style={{ fontSize: "xx-large" }}>作品详情</div>
                <div className="info-card-detail">
                    {project.images.map((item) => (
                        <img className="info-detail-image" src={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Info;
