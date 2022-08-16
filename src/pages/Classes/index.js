import { useEffect, useState } from "react";
import GraduationCard from "../../cards/Card";
import { Utils } from "../../utils/utils";
import "./index.css";

const Classes = (props) => {
    const [data, setData] = useState({
        list: [],
    });
    useEffect(() => {
        Utils.getData("./works/result.json", setData);
    }, []);
    return (
        <div>
            <ul>
                {data.list.map((item) =>
                    item.class === props.class ? (
                        <div className="class-graduation-card" key={item.id}>
                            <GraduationCard project={item} />{" "}
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    );
};

export default Classes;
