import { Layout, Menu } from "antd";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const GraduationLayout = ({ children }) => {
    const location = useLocation();
    const [menuHidden, setMenuHidden] = useState(false);
    const layout = (
        <>
            <Layout>
                {menuHidden ? null : (
                    <Menu
                        style={{ background: "#cdd4a6", border: "#cdd4a6" }}
                        mode="horizontal"
                        defaultSelectedKeys={[location.pathname]}
                    >
                        <Menu.Item style={{ left: "10px" }} key="/home">
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
                )}
                <div style={{ background: "#cdd4a6" }}>
                    <div
                        className="menu-hidden-bar"
                        onClick={() => {
                            setMenuHidden(!menuHidden);
                        }}
                    ></div>
                </div>
            </Layout>
            {children}
            <div style={{ height: "200px", "background-color": "#cdd4a6" }}></div>
        </>
    );
    //开始页不显示菜单
    return location.pathname === "/" ? <>{children}</> : layout;
};

export default GraduationLayout;
