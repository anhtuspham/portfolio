import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import BrandIcon from "../components/BrandIcon";

function Home() {
  return (
    <>
      <div id="home" className="bg-emerald-500 h-full w-full pt-36 pb-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center uppercase gap-3 text-white">
          <h1 className="text-6xl">Hi, there</h1>
          <h1 className="text-[50px]">I'm Anh Tu Pham</h1>
          <p>Web developer</p>

          {/* icon brand */}
          <div>
            <ul className="flex gap-2 text-3xl">
              <BrandIcon srcIcon={faGithub} />
              <BrandIcon srcIcon={faLinkedin} />
              <BrandIcon srcIcon={faEnvelope} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
