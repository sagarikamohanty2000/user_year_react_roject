import React, { useState, useRef } from "react";
import ErrorModel from "../Error/ErrorModel";
import "./InputForm.css";

const InputForm = (props) => {
  const name = useRef();
  const year = useRef();
  const [error, setError] = useState();

  const errorHandler = (errorBoolean) => {
   setError();
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newUser = {
      name: name.current.value,
      year: year.current.value,
    };

    if (name.current.value.trim().length === 0 || year.current.value.trim().length === 0){
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name or age(no empty fields please)!",
      });
      return;
    }

    if (+year.current.value < 1) {
     setError({
      title:"Invalid Age",
      message: "Please enter a valid Age( >0 )!"
     })
      return;
    }


    props.onSaveUserDetails(newUser);
    name.current.value ="";
    year.current.value ="";
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
            <input type="text" ref={name}></input>
          </div>
          <div className="yearLabel">
            <label>Age (Years)</label>
          </div>
          <div className="yearInput">
            <input type="number" ref={year}></input>
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
