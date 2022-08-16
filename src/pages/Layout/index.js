import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const GraduationLayout = () => {
    const location = useLocation();
    const layout = (
        <Layout>
            <Menu
                style={{ background: "#cdd4a6" }}
                mode="horizontal"
                defaultSelectedKeys={[location.pathname]}
            >
                <Menu.Item style={{ left: "10px" }} key="/">
                    <Link className="menu-link" to={"/home"}>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item style={{ position: "absolute", right: "120px" }} key="/class1">
                    <Link className="menu-link" to={"/class1"}>
                        Class1
                    </Link>
                </Menu.Item>
                <Menu.Item style={{ position: "absolute", right: "10px" }} key="/class2">
                    <Link className="menu-link" to={"/class2"}>
                        Class2
                    </Link>
                </Menu.Item>
            </Menu>
        </Layout>
    );
    //开始页不显示菜单
    return location.pathname === "/" ? null : layout;
};

export default GraduationLayout;
