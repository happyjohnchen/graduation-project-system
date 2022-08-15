const { Card } = require("antd")

const GraduationCard = (props) => {
    return (
        <Card title={props.title}>
            {props.message}
        </Card>
    )
}

export default GraduationCard;