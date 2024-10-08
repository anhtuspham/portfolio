import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "./About.module.css";
import image from "./../../images/7755-tu.jpg";
import cv from "./../../images/PhamAnhTu-CV.pdf";
import Header from "../../components/Header";
import LinkButton from "../../components/LinkButton";

function About() {
  return (
    <>
      <section id="about" className="pb-10 bg-primary">
        {/* Header */}
        <Header title="About" />
        {/* Content */}
        <div className="w-3/5 mx-auto max-[1440px]:w-4/5">
          <div className="grid grid-cols-[220px_minmax(220px,_1fr)_minmax(220px,_1fr)] gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            <div className="bg-white p-4 w-full h-full rounded-md shadow-md max-h-[300px]">
              <div className="w-full h-full">
                <img className="w-full h-full object-cover aspect-[3/4]" src={image} />
              </div>
            </div>
            <div className="bg-white w-full p-4 rounded-md shadow-md">
              <div className="uppercase pb-5 text-2xl">Summary</div>
              <p>
                I'm Pham Anh Tu, a young and energetic intern developer eager to
                learn. I have experience working with JavaScript and ReactJS
                through school projects and personal projects. I am passionate
                about learning new languages and technologies.
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
            <div className="bg-white p-4 w-full h-full rounded-md shadow-md">
              <div className="">
                <div className="uppercase my-4 text-2xl">Contact info</div>

                <address>
                  <ul>
                    <li className={`${styles.addressLine}`}>
                      <FontAwesomeIcon
                        className="absolute"
                        icon={faLocationDot}
                      />
                      <p className="pl-6">Thu Duc city, Ho Chi Minh city</p>
                    </li>
                    <li className={`${styles.addressLine}`}>
                      <FontAwesomeIcon className="absolute" icon={faPhone} />
                      <p className="pl-6">+84 395 514 138</p>
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
        </div>
      </section>
    </>
  );
}

export default About;
