import { useNavigate } from "react-router-dom";

const Start = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate("/home")}>
            <img width="100%" src="./imgs/start.jpg" alt="start page"/>
        </div>
    );
};

export default Start;
