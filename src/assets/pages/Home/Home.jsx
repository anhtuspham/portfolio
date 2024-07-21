import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import BrandIcon from "../../components/BrandIcon";

import banner from "./../../images/banner.png";

import ParticlesContainer from "../../components/ParticlesContainer";
import TypeWriter from "../../components/TypeWriter";

function Home() {
  return (
    <>
      <ParticlesContainer />
      <section
        id="home"
        className={` h-full w-full pt-36 pb-8 flex flex-wrap `}
      >
        <div className="max-w-4xl w-2/3 mx-auto flex flex-col items-center gap-2.5 text-white mt-12">
          <h1 className="text-[40px] capitalize text-left">Hi, there</h1>
          <h1 className="text-[42px] uppercase">I'm
            <span className="text-fuchsia-600 ml-3 font-semibold">Anh Tu Pham</span>
          </h1>
          <TypeWriter speed="150" texts={['Front-end Developer', 'Back-end Developer', 'Intern Developer']}/>

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
