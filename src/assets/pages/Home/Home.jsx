import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import BrandIcon from "../../components/BrandIcon";

import banner from "./../../images/banner.png";

import ParticlesContainer from "../../components/ParticlesContainer";

function Home() {
  return (
    <>
      <section
        id="home"
        className={` h-full w-full pt-36 pb-8 flex flex-wrap `}
      >
        <ParticlesContainer />
        <div className="max-w-4xl w-2/3 mx-auto flex flex-col items-center uppercase gap-2.5 text-white">
          <h1 className="text-6xl">Hi, there</h1>
          <h1 className="text-[50px]">I'm Anh Tu Pham</h1>
          <p>Web developer</p>

          {/* icon brand */}
          <div>
            <ul className="flex gap-1.5 text-3xl">
              <BrandIcon
                srcIcon={faGithub}
                linkForward="https://github.com/anhtuspham"
                brandName="github"
              />
              <BrandIcon
                srcIcon={faLinkedin}
                linkForward="https://www.linkedin.com/in/anh-tu-689493245/"
                brandName="linkedin"
              />
              <BrandIcon
                srcIcon={faEnvelope}
                linkForward="mailto:panhtu0902@gmail.com"
                brandName="Email"
              />
            </ul>
          </div>
        </div>
        <div className="w-1/3 max-h-96">
          <img className="h-full w-auto" src={banner} alt="home-banner" />
        </div>
      </section>
    </>
  );
}

export default Home;
