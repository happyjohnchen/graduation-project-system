import { useEffect, useState } from "react";
import GraduationCard from "../../cards/Card";
import { Utils } from "../../utils/utils";

const Classes = (props) => {
    const d = {
        list: []
    }
    const [data, setData] = useState(d);
    useEffect(() => {
        Utils.getData("./works/result.json", setData);
    }, []);
    return (
        <div>
            <ul>
                {data.list.map((item) =>
                    item.class === props.class ? <GraduationCard project={item} key={item.id} /> : null
                )}
            </ul>
        </div>
    );
};

export default Classes;
