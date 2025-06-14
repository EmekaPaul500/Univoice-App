import { Form, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <main className="login-main">
      <Form action="/splashScreen3">
        <button className="login-arrow-left-btn">
          <img src="./Images/arrow-left.png" alt="arrow-left" />
        </button>
      </Form>

      {/* <figure> */}
      <img src="./Images/Logo1.png" alt="Logo1" />
      {/* </figure> */}

      {/*  Login Section*/}
      <section className="login-section">
        <figure>
          <img src="./Images/Login logo.png" alt="Login logo" />
        </figure>
        <h1>Welcome!</h1>
        <Form>
          <div className="login-input-div">
            <input type="email" placeholder="Email" />
            {/* <small className="login-wrong-username">Wrong Username</small> */}
          </div>
          <div className="login-input-div">
            <input type="password" placeholder="Password" />

            <div className="login-password-div">
              {/* <small>Wrong Password</small> */}
              <Link to="" className="login-forget-password">
                Forget Password?
              </Link>
            </div>
          </div>
        </Form>
        <button className="login-btn">Log in</button>
        <div className="login-last-div">
          <h5>Don't have an account?</h5>
          <Link to="/signUp">Sign up</Link>
        </div>
      </section>
    </main>
  );
};

export default Login;
