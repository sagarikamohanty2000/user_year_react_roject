import React, { useState } from "react";
import ErrorModel from "../Error/ErrorModel";
import "./InputForm.css";

const InputForm = (props) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState();

  const errorHandler = (errorBoolean) => {
   setError();
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      year: year,
    };

    if (name.trim().length === 0 || year.trim().length === 0){
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name or age(no empty fields please)!",
      });
      return;
    }

    if (year < 1) {
     setError({
      title:"Invalid Age",
      message: "Please enter a valid Age( >0 )!"
     })
      return;
    }


    props.onSaveUserDetails(newUser);
    setName("");
    setYear("");
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const yearHandler = (event) => {
    setYear(event.target.value);
  };
  return (
    <div>
      
      {error && <ErrorModel title={error.title} message={error.message} resolveError={errorHandler} />}
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
    </div>
  );
};

export default InputForm;
