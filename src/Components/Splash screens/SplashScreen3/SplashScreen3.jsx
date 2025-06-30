import "./SplashScreen3.css";
import { Form } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SplashScreen3 = () => {
  return (
    <div className="SplashScreen3-div">
      <figure>
        <LazyLoadImage
          src="./Images/People logo1testing.png"
          alt="People1 logo"
          effect="blur"
          wrapperProps={{ style: { transitionDelay: "2s" } }}
          placeholderSrc="People1 logo"
        />
      </figure>
      <div>
        <h1>How UniVoice Works</h1>
        <p className="SplashScreen3-p">
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
