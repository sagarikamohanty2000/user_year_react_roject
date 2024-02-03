
import './UserDetail.css';
const UserDetail = (props) => {

    return (
        <li className="contents">
        
                {props.user.name}  {`(${props.user.year} years old)`} {`Studies in  ${props.user.clg} college`}
            
        </li>
    )
}

export default UserDetail;