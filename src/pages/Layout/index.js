import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const GraduationLayout = ({ children }) => {
    const location = useLocation();
    const [menuHidden, setMenuHidden] = useState(false);
    const [keys, setKeys] = useState(["/home"]);
    useEffect(() => {
        switch (location.pathname) {
            case "/home":
                setKeys(["/home"]);
                break;
            case "/class1":
                setKeys(["/class1"]);
                break;
            case "/class2":
                setKeys(["/class2"]);
                break;
            default:
                setKeys([]);
        }
    }, [location.pathname]);
    const layout = (
        <>
            <Layout>
                <Menu
                    id="menu"
                    style={{ background: "#acb86b", border: "#cdd4a6" }}
                    mode="horizontal"
                    selectedKeys={keys}
                    hidden={menuHidden}
                >
                    <Menu.Item style={{ left: "50px", fontFamily: "eng" }} key="/home">
                        <Link className="menu-link" to={"/home"}>
                            Home
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        style={{ position: "absolute", right: "280px", fontFamily: "eng" }}
                        key="/class1"
                    >
                        <Link className="menu-link" to={"/class1"}>
                            Class1
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        style={{ position: "absolute", right: "100px", fontFamily: "eng" }}
                        key="/class2"
                    >
                        <Link className="menu-link" to={"/class2"}>
                            Class2
                        </Link>
                    </Menu.Item>
                </Menu>
                <div style={{ background: "#acb86b" }}>
                    <div
                        className="menu-hidden-bar"
                        onClick={() => {
                            setMenuHidden(!menuHidden);
                        }}
                    ></div>
                </div>
            </Layout>
            {children}
            <div className="page-bottom">
                版权所有 © 北京工业大学
                <br />
                京公网安备：110402430086 京ICP备：14043795号-2
                <br />
                COPYRIGHT © BEIJING UNIVERSITY OF TECHNOLOGY
                <br />
                Site designed by BODA
            </div>
        </>
    );
    //开始页不显示菜单
    return location.pathname === "/" ? <>{children}</> : layout;
};

export default GraduationLayout;
