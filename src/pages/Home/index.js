import { useNavigate } from "react-router-dom";
import DirectionCard from "../../cards/Direction";
import "./index.css";
const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div className="home-intro">
                    <div className="home-title">绽放</div>
                </div>
                <div className="home-intro-card"></div>
            </div>
            <div className="home-img"></div>
            <DirectionCard direction={"1"}>方向一</DirectionCard>
            <DirectionCard direction={"2"}>方向二</DirectionCard>
            <DirectionCard direction={"3"}>方向三</DirectionCard>
            <DirectionCard direction={"4"}>方向四</DirectionCard>
            <DirectionCard direction={"5"}>方向五</DirectionCard>
        </div>
    );
};

export default Home;
