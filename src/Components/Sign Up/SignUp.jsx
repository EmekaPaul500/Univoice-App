import "./SignUp.css";
import { Form, Link } from "react-router-dom";

const SignUp = () => {
  return (
    <main className="sign-up-main">
      <Form action="/login">
        <button className="sign-up-arrow-left-btn">
          <img src="./Images/arrow-left.png" alt="arrow-left" />
        </button>
      </Form>

      {/* <figure> */}
      <img src="./Images/Logo1.png" alt="Logo1" />
      {/* </figure> */}

      {/* Sign up section */}
      <section className="sign-up-section">
        <figure>
          <img src="./Images/sign-up logo.png" alt="Sign up Logo" />
        </figure>
        <h3>Create your UniVoice Account!</h3>
        <Form>
          <div className="sign-up-input-div">
            <input type="text" placeholder="Full name " />
            <small>Hello</small>
          </div>
          <div className="sign-up-input-div">
            <input type="text" placeholder="Matric no:" />
            <small></small>
          </div>
          <div className="sign-up-input-div">
            <input type="text" placeholder="Department" />
            <small></small>
          </div>

          <div className="sign-up-input-div">
            <input type="text" placeholder="Level" />
            <small>Hello</small>
          </div>
          <div className="sign-up-input-div">
            <input type="text" placeholder="Email" />
            <small></small>
          </div>
          <div className="sign-up-input-div">
            <input type="text" placeholder="Password  " />
            <small></small>
          </div>
        </Form>
        <div className="sign-up-last-div">
          <h5>Already have an account? </h5>
          <Link to="/login">Log in</Link>
        </div>
        <button className="sign-up-btn">Sign up</button>
      </section>
    </main>
  );
};

export default SignUp;
