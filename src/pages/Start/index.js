import { useNavigate } from "react-router-dom";

const Start = () => {
    const navigate = useNavigate();
    return <div onClick={() => navigate("/home")}>Start</div>;
};

export default Start;
