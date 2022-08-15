import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Utils } from "../../utils/utils";

const Info = () => {
    const location = useLocation();
    const id = location.pathname.split("/").pop();
    const d = {
        list: [],
    };
    const [data, setData] = useState(d);
    useEffect(() => {
        Utils.getData("../works/result.json", setData);
    }, []);
    return <div>Info of: {id}</div>;
};

export default Info;
