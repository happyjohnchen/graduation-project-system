import GraduationCard from "../../cards/Card";

const Classes = (props) => {
    const project = {
        name: "姓名",
        id: "学号",
        projectTitle: "作品标题",
        info: "简介内容\n这里是作品的内容",
    };
    return (
        <div>
            <GraduationCard project = {project} />
        </div>
    );
};

export default Classes;
