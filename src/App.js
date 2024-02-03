import NewUser from "./Components/User/NewUser";
import React, { useState } from "react";
import UserList from "./Components/User/UserList";
import "./App.css";

const dummy = [];

const App = () => {
  const [details, setUserDetail] = useState(dummy);

  const addUser = (userDetail) => {
    setUserDetail((prevDetails) => {
      return [userDetail, ...prevDetails];
    });
    console.log("App.js");
    console.log(details);
  };
  return (
    <div className="App">
      <header className="App-header">
        <NewUser addNewUser={addUser} />
      </header>
      <UserList Userdetail={details}></UserList>
    </div>
  );
};

export default App;
