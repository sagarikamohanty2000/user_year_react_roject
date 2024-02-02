import "./ErrorModel.css";

const ErrorModel = (props) => {
    const errorResolved = () => {
      props.resolveError(true);
    }
  return (
    <div>
      <div className="backdrop" />
      <div class="layout">
        <header className="header-h2">
          <h2>{props.title}</h2>
        </header>
        <div className="Content">
          <p>{props.message}</p>
        </div>
        <footer>
          <button type="button" onClick={errorResolved}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModel;
