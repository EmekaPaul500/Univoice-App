import "./EditPersonalInfo.css";
import { Form } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const EditPersonalInfo = () => {
  return (
    <main className="edit-personal-info-main">
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
      <section className="edit-personal-info-first-sec">
        <div>
          <h4>User name </h4>
          <div className="edit-personal-info-input-div">
            <input type="text" value="Sophia Daniels " />
            <img src="./Images/icon(4).png" alt="icon" />
          </div>
        </div>

        <div>
          <h4>Email</h4>
          <div className="edit-personal-info-input-div">
            <input type="text" value="suzzy12@gmail.com " />
            <img src="./Images/icon(1).png" alt="icon" />
          </div>
        </div>

        <div>
          <h4>Department </h4>
          <div className="edit-personal-info-input-div">
            <input type="text" value="Computer Science " />
            <img src="./Images/icon(3).png" alt="icon" />
          </div>
        </div>

        <div>
          <h4>Level </h4>
          <div className="edit-personal-info-input-div">
            <input type="text" value="400l " />
            <img src="./Images/icon(2).png" alt="icon" />
          </div>
        </div>
      </section>
      <Form className="edit-personal-info-form">
        <button>Save changes </button>
      </Form>
    </main>
  );
};

export default EditPersonalInfo;
