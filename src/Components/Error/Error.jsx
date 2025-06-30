import { Link } from "react-router-dom";
import "./Error.css";

const Error = ({ p, link, text }) => {
  return (
    <div className="Error-div">
      <p>{p}</p>
      <Link to={link}>{text}</Link>
    </div>
  );
};

export default Error;
