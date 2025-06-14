import "./SplashScreen3.css";
import { Form } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SplashScreen3 = () => {
  return (
    <div className="SplashScreen3-div">
      <figure>
        <img
          src="./ImagesWebp/People logo1.Webp"
          alt="People logo"
          loading="lazy"
        />
      </figure>
      <div>
        <h1>How UniVoice Works</h1>
        <p>
          Submit complaints in just a few clicks, track progress in real-time,
          and receive notifications when your issue is resolved. UniVoice makes
          it easy to stay informed and get the support you need.
        </p>
      </div>
      <div className="SplashScreen3-button-div">
        <Form action="/login">
          <button>
            <img src="./Images/arrow-right.png" alt="arrow-right" />
          </button>
        </Form>
      </div>
    </div>
  );
};

export default SplashScreen3;
