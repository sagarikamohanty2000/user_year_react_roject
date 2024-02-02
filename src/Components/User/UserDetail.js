
import './UserDetail.css';
const UserDetail = (props) => {

    return (
        <li className="contents">
            <div className="username-div">
                {props.user.name}
            </div>
            <div className="age-div">
                {` (${props.user.year} years old)`}
            </div>
        </li>
    )
}

export default UserDetail;