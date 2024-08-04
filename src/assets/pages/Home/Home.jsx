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
        className="h-full w-full mt-36 mb-8 flex flex-wrap max-lg:mt-28 max-lg:mb-4 max-sm:mt-2 max-sm:mb-0"
      >
        <div className="max-w-4xl w-2/3 mx-auto flex flex-col items-center gap-2.5 text-white mt-12">
          <h1 className="text-[40px] capitalize text-left max-md:text-[30px] max-sm:text-[20px]">
            Hi, there
          </h1>
          <h1 className="text-[42px] uppercase max-md:text-[31px] max-sm:text-[19px]">
            I'm
            <span className="text-fuchsia-600 ml-3 font-semibold">
              Anh Tu Pham
            </span>
          </h1>
          <TypeWriter
            speed="150"
            texts={[
              "Front-end Developer",
              "Back-end Developer",
              "Intern Developer",
            ]}
          />

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
        <div className="w-1/3 max-h-96 max-lg:max-w-full max-lg:w-full flex justify-center max-md:scale-75">
          <img className="h-full w-auto" src={banner} alt="home-banner" />
        </div>
      </section>
    </>
  );
}

export default Home;
