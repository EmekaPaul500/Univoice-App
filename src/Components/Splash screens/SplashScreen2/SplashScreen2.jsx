import "./SplashScreen2.css";
import { Form } from "react-router-dom";

const SplashScreen2 = () => {
  return (
    <div className="SplashScreen2-div">
      <figure>
        <img src="./Images/People logo.png" alt="People logo" />
      </figure>
      <div>
        <h1>Welcome to UniVoice</h1>
        <p>
          Easily report any issues on campus, whether academic, technical, or
          administrative. Stay updated as your complaints move through the
          resolution process.
        </p>
      </div>
      <div className="SplashScreen2-button-div">
        <Form action="/splashScreen3">
          <button>
            <img src="./Images/arrow-right.png" alt="arrow-right" />
          </button>
        </Form>
      </div>
    </div>
  );
};

export default SplashScreen2;
