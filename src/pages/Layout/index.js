import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const GraduationLayout = () => {
    const location = useLocation();
    return (
        <Layout>
            <Menu
                style={{ background: "#cdd4a6" }}
                mode="horizontal"
                defaultSelectedKeys={[location.pathname]}
            >
                <Menu.Item key="/">
                    <Link className="menu-link" to={"/"}>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="/class1">
                    <Link className="menu-link" style={{ float: "right" }} to={"/class1"}>
                        Class1
                    </Link>
                </Menu.Item>
                <Menu.Item key="/class2">
                    <Link className="menu-link" to={"/class2"}>
                        Class2
                    </Link>
                </Menu.Item>
            </Menu>
        </Layout>
    );
};

export default GraduationLayout;
