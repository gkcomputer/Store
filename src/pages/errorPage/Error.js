import { Link } from "react-router-dom";
import errorimage from "../../assests/error_page.png";
import Classes from "./Error.module.css";

export const Error = () => {
  return (
    <div className={Classes.error}>
      <img src={errorimage} alt="404 Error" />
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};
