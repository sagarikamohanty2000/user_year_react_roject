import InputForm from "./InputForm";

const UserDetails = (props) => {
    
  const userDetails = (newuserDetails) => {
    const userDetail = {
      ...newuserDetails,
      id: Math.random().toString(),
    };
    props.addNewUser(userDetail);
  };
  return <InputForm onSaveUserDeatils={userDetails}></InputForm>;
};

export default UserDetails;
