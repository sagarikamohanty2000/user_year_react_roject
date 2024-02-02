import React, {useState} from 'react';
import './InputForm.css';

const InputForm = (props) => {
     
    const [name, setName] = useState("");
    const [year, setYear] = useState("");

    const onSubmitHandler = (event) => {
        
      event.preventDefault();

      const newUser ={
        name : name,
        year : year
      };

       props.onSaveUserDetails(newUser);
       console.log("NewUserSaved")
       setName("");
       setYear("");
    }

    const nameHandler = (event) => {
        console.log(event.target.value);
    setName(event.target.value);
    }
    const yearHandler = (event) => {
        console.log(event.target.value);
     setYear(event.target.value); 
    }
  return (
    <div className="formLayout">
      <form onSubmit={onSubmitHandler}>
        <div className="nameLabel">
          <label>Username</label>
        </div>
        <div className="nameInput">
          <input type="text" value={name} onChange={nameHandler}></input>
        </div>
        <div className="yearLabel">
          <label>Age (Years)</label>
        </div>
        <div className="yearInput">
          <input type="number" value={year} onChange={yearHandler}></input>
        </div>
        <div className="addBtn">
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};


export default InputForm;