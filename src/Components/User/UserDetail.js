
import './UserDetail.css';
const UserDetail = (props) => {

    return (
        <li className="contents">
        
                {props.user.name}  {`(${props.user.year} years old)`}
            
        </li>
    )
}

export default UserDetail;