import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import {ArrowLeftOutlined} from "@ant-design/icons"
import "./index.css";
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="not-found-title">404 not found</div>
            <div className="not-found-message">对不起，没有找到这个页面</div>
            <Button className="not-found-button" onClick={() => navigate("/home")} icon={<ArrowLeftOutlined />}>
                回到首页
            </Button>
        </div>
    );
};

export default NotFound;
