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
                <div className="home-intro-card"></div>
            </div>
            <div className="home-img"></div>
            {data.directions.map((item) => (
                <DirectionCard key={item.id} direction={item} data={data}>
                    {item.title}
                </DirectionCard>
            ))}
        </div>
    );
};

export default Home;
