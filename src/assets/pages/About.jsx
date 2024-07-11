import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "./About.module.css";
import image from "./../images/test.jpg";
import cv from "./../images/PhamAnhTu-Intership-CV.pdf"

function About() {
  return (
    <div className="backgroundColor text-black">
      {/* Header */}
      <div className="uppercase tracking-wider py-4 mb-10 bg-white text-slate-400 text-4xl text-center">
        About me
      </div>

      {/* Content */}
      <div className="flex w-3/5 mx-auto gap-5 mb-10">
        <div className="bg-white p-4 w-3/12 rounded-md">
          <div>
            <img src={image} />
          </div>
        </div>
        <div className="bg-white w-6/12 p-5 rounded-md">
          <div className="pb-5 text-2xl">Summary</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </p>
          <a href={cv} download>My CV</a>
        </div>
        <div className="bg-white p-5 w-3/12 h-full rounded-md">
          <div className="">
            <div className="uppercase my-4">Contact info</div>

            <address>
              <ul>
                <li className={`${styles.addressLine}`}>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p className="relative left-2.5">
                    Thu Duc city, Ho Chi Minh city
                  </p>
                </li>
                <li className={`${styles.addressLine}`}>
                  <FontAwesomeIcon icon={faPhone} />
                  <p className="relative left-2.5">+84 395 514 111</p>
                </li>
                <li className={`${styles.addressLine}`}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p className="relative left-2.5">
                    <a href="mailto:panhtu0902@gmail.com">
                      panhtu0902@gmail.com
                    </a>
                  </p>
                </li>
                <li className={`${styles.addressLine}`}>
                  <FontAwesomeIcon icon={faLinkedin} />
                  <p className="relative left-2.5">
                    <a href="https://www.linkedin.com/in/anh-tu-689493245/">
                      Pham Anh Tu
                    </a>
                  </p>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
