
import './Card.css'
const Card = (props) => {

    return (
        <div className="user-detail-layout">{props.children}</div>
    )
}

export default Card;