import InputForm from "./InputForm";

const NewUser = (props) => {

  const addUser = (newuserDetails) => {
    const userDetail = {
      ...newuserDetails,
      id: Math.random(),
    };
    console.log(userDetail);
    props.addNewUser(userDetail);
  };

  return (<InputForm onSaveUserDetails={addUser}></InputForm>);
};

export default NewUser;
