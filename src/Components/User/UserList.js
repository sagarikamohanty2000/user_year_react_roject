import Card from "../UI/Card";
import UserDetail from "./UserDetail";
const UserList = (props) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {props.Userdetail.map((newUser) => (
        <Card key={newUser.id}>
          <UserDetail user={newUser} />
        </Card>
      ))}
    </ul>
  );
};

export default UserList;
