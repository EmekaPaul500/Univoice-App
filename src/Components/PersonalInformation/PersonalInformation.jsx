import "./PersonalInformation.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Form } from "react-router-dom";

const PersonalInformation = () => {
  return (
    <main className="personal-info-main">
      <Form action="/home">
        <button className="arrow-left-btn">
          <img src="./Images/arrow-left.png" alt="arrow-left" />
        </button>
      </Form>
      <div className="logo1">
        <LazyLoadImage
          src="./Images/Logo1.png"
          alt="Logo1"
          effect="blur"
          wrapperProps={{ style: { transitionDelay: "1s" } }}
          placeholderSrc="logo1"
        />
      </div>
      <h2>Personal Information </h2>
      <section className="personal-info-first-sec">
        <div className="personal-info-user-div">
          <LazyLoadImage
            src="./Images/user1.png"
            alt="User"
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "2s" } }}
            placeholderSrc="User"
          />
          <div className="personal-info-edit-div">
            <img src="./Images/edit.png" alt="" />
          </div>
        </div>
      </section>
      <section className="personal-info-second-sec">
        <div>
          <h4>User name: </h4>
          <p>Peter Brook</p>
        </div>
        <div>
          <h4>Matric no: </h4>
          <p>SCI21CSC025</p>
        </div>
        <div>
          <h4>Department: </h4>
          <p>Computer Science</p>
        </div>
        <div>
          <h4>Level: </h4>
          <p>400L </p>
        </div>
        <div>
          <h4>Email:</h4>
          <p>brookkyln23@gmail.com</p>
        </div>
      </section>
      <Form action="/editPersonalInfo" className="personal-info-form">
        <button>Edit</button>
      </Form>
    </main>
  );
};

export default PersonalInformation;
