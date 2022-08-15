import { Layout, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";

const GraduationLayout = () => {
    return (
        <Layout>
            <Menu className="menu-bar" mode="horizontal" defaultSelectedKeys={["/"]}>
                <Menu.Item key="/">
                    <Link to={"/"}>Home</Link>
                </Menu.Item>
                <Menu.Item key="/class1">
                    <Link to={"/class1"}>Class1</Link>
                </Menu.Item>
                <Menu.Item key="class2">
                    <Link to={"/class2"}>Class2</Link>
                </Menu.Item>
            </Menu>
        </Layout>
    );
};

export default GraduationLayout;
