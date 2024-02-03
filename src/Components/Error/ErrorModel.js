import React from "react";
import "./ErrorModel.css";
import ReactDOM from "react-dom";

const ErrorModel = (props) => {
  const Backdrop = () => {
    return <div className="backdrop" />;
  };

  const OverlayModule = (props) => {
    return (
      <div className="layout">
        <header className="header-h2">
          <h2>{props.title}</h2>
        </header>
        <div className="Content">
          <p>{props.message}</p>
        </div>
        <footer>
          <button type="button" onClick={errorResolved}>
            Okay
          </button>
        </footer>
      </div>
    );
  };

  const errorResolved = () => {
    props.resolveError(true);
  };
  return (
  <React.Fragment>
    {ReactDOM.createPortal(<Backdrop/>, document.getElementById('backdrop'))};
    {ReactDOM.createPortal(<OverlayModule title={props.title} message={props.title}/>, document.getElementById('overlay-module'))};
  </React.Fragment>);
};

export default ErrorModel;
