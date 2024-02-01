import React, {useState} from 'react';
import './InputForm.css';

const InputForm = (props) => {
     
    const [name, setName] = useState("");
    const [year, setYear] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
      const newUser ={
        username : name,
        age : year
      }
       props.onSaveUserDetails(newUser);
       setName("");
       setYear("");
    }

    const yearHandler = (event) => {
     setYear(event.target.value); 
    }
  return (
    <div className="formLayout">
      <form onSubmit={onSubmitHandler}>
        <div className="nameLabel">
          <label>Username</label>
        </div>
        <div className="nameInput">
          <input type="text" onChange={(event) => {setName(event.target.value)}}></input>
        </div>
        <div className="yearLabel">
          <label>Age (Years)</label>
        </div>
        <div className="yearInput">
          <input type="number" onChange={yearHandler}></input>
        </div>
        <div className="addBtn">
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};


export default InputForm;