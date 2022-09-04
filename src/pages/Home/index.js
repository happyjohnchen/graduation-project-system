import { useState, useEffect } from "react";
import DirectionCard from "../../cards/Direction";
import { Utils } from "../../utils/utils";
import "./index.css";
const Home = () => {
    document.title = "毕业设计-首页";
    const [data, setData] = useState({
        directions: [],
        list: [],
    });
    useEffect(() => {
        Utils.getData("./works/result.json", setData);
    }, []);
    return (
        <div>
            <div>
                <div className="home-intro">
                    <div className="home-title">起航</div>
                </div>
                <div className="home-intro-card">
                    北京工业大学
                    <br />
                    19级数字媒体技术
                    <br />
                    190811、190812班
                    <br />
                    在xxx老师、xxx老师、xxx老师、xxx老师、xxx老师的指导教学下完成的毕业设计作品，现展示如下
                </div>
            </div>
            <div>
                <img src="/imgs/1.jpg" className="home-img" alt="首页班级合照" />
            </div>
            {data.directions.map((item) => (
                <>
                    <div className="direction-devider"></div>
                    <DirectionCard key={item.id} direction={item} data={data}>
                        {item.title}
                    </DirectionCard>
                </>
            ))}
        </div>
    );
};

export default Home;
