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
                    <div className="home-title">绽放</div>
                </div>
                <div className="home-intro-card">
                    这里是首页的介绍说明文字
                    <br />
                    此处将要介绍毕业设计的大体内容
                    2019届数字媒体技术学生毕业设计的大体内容在此处展示
                </div>
            </div>
            <div>
                <img src="/imgs/1.jpg" className="home-img" />
            </div>
            {data.directions.map((item) => (
                <DirectionCard key={item.id} direction={item} data={data}>
                    {item.title}
                </DirectionCard>
            ))}
        </div>
    );
};

export default Home;
