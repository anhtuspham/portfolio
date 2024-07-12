import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "./About.module.css";
import image from "./../images/test.jpg";
import cv from "./../images/PhamAnhTu-Intership-CV.pdf";
import Header from "../components/Header";
import LinkButton from "../components/LinkButton";

function About() {
  return (
    <>
      {/* Header */}
      <Header title="About" />

      {/* Content */}
      <div className="flex w-3/5 mx-auto gap-5 mb-10">
        <div className="bg-white p-4 w-3/12 rounded-md h-max">
          <div>
            <img className="max-w-full aspect-square" src={image} />
          </div>
        </div>
        <div className="bg-white w-6/12 p-4 rounded-md">
          <div className="uppercase pb-5 text-2xl">Summary</div>
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
          <div className="my-4 max-w-28">
            <LinkButton
              name="My CV"
              srcIcon={faDownload}
              linkForward={cv}
              canDownload={true}
              isForward={false}
            />
          </div>
        </div>
        <div className="bg-white p-4 w-3/12 h-full rounded-md">
          <div className="">
            <div className="uppercase my-4 text-2xl">Contact info</div>

            <address>
              <ul>
                <li className={`${styles.addressLine}`}>
                  <FontAwesomeIcon className="absolute" icon={faLocationDot} />
                  <p className="pl-6">Thu Duc city, Ho Chi Minh city</p>
                </li>
                <li className={`${styles.addressLine}`}>
                  <FontAwesomeIcon className="absolute" icon={faPhone} />
                  <p className="pl-6">+84 395 514 111</p>
                </li>
                <li className={`${styles.addressLine}`}>
                  <FontAwesomeIcon className="absolute" icon={faEnvelope} />
                  <p className="pl-6">
                    <a href="mailto:panhtu0902@gmail.com">
                      panhtu0902@gmail.com
                    </a>
                  </p>
                </li>
                <li className={`${styles.addressLine}`}>
                  <FontAwesomeIcon className="absolute" icon={faLinkedin} />
                  <p className="pl-6">
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
    </>
  );
}

export default About;
