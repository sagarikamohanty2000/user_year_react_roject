import NewUser from "./Components/User/NewUser";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [details, setUserDetail] = useState([]);

  const addUser = (userDetail) => {
    setUserDetail((prevDetails) => {
      return [userDetail, ...prevDetails];
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <NewUser addNewUser={addUser}></NewUser>
      </header>

     
    </div>
  );
}

export default App;
