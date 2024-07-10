import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import image from './../images/profile-image.jpg'
function About() {
  return (
    <div className="container">
      {/* Header */}
      <div className="uppercase">About me</div>

      {/* Content */}
      <div className="flex">
        <div className="p-2 w-3/12">
            <div>
                <img src={image} />
            </div>
        </div>
        <div className="w-6/12">Summary</div>
        <div className="p-2 w-3/12 h-10 bg-slate-600">
          <div className="w-full h-full">
            <div className="uppercase">Contact info</div>
            <address>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>Thu Duc city, Ho Chi Minh city</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <p>+84 395 514 111</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>
                    <a href="mailto:panhtu0902@gmail.com">
                      panhtu0902@gmail.com
                    </a>
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faLinkedin} />
                  <p>
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
