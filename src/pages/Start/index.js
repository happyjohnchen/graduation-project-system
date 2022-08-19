import { useNavigate } from "react-router-dom";

const Start = () => {
    const navigate = useNavigate();
    document.title = "毕业设计";
    return (
        <div onClick={() => navigate("/home")}>
            <img width="100%" src="./imgs/start.jpg" alt="start page" />
        </div>
    );
};

export default Start;
