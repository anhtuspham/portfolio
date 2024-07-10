import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <div className="bg-emerald-500 h-full w-full pt-36 pb-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center uppercase gap-3">
          <h1 className="text-6xl">Hi, there</h1>
          <h1 className="text-[50px]">I'm Anh Tu Pham</h1>
          <p>Web developer</p>

          {/* icon brand */}
          <div>
            <ul className="flex gap-2 text-3xl">
              {/* Github */}
              <li className="flex flex-col items-center text-transparent">
                <a className="peer" href="/">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <p className="text-sm peer-hover:text-white">Github</p>
              </li>

              {/* Linkedin */}
              <li className="flex flex-col items-center text-transparent">
                <a className="peer" href="/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <p className="text-sm peer-hover:text-white">Linkedin</p>
              </li>

              {/* Email */}
              <li className="flex flex-col items-center text-transparent">
                <a className="peer" href="/">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <p className="text-sm peer-hover:text-white">Email</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
