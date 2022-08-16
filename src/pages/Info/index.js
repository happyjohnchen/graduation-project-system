import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Utils } from "../../utils/utils";
import "./index.css";

const Info = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.pathname.split("/").pop();
    const d = {
        list: [],
    };
    const [data, setData] = useState(d);
    let project = null;
    useEffect(() => {
        Utils.getData("../works/result.json", (datas) => {
            setData(datas);
            for (const p of datas.list) {
                if (id == p.id) {
                    project = p;
                    console.log(p);
                    return;
                }
            }
            navigate('/class1')
        });
    }, []);
    return (
        <div>
            Info of: {id}
            <div>
                <div className="info-card">视频</div>
                <div className="info-card">作品简介</div>
            </div>
            <div>
                <div className="info-card">作者图片</div>
                <div className="info-card">作者介绍</div>
            </div>
            <div className="info-detail">作品详情</div>
        </div>
    );
};

export default Info;
