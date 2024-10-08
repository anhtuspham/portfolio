import {Children} from 'react'

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

import LinkButton from "./LinkButton";

export default function ListProject({
  title,
  linkGithub,
  linkDemo,
  imgProject,
  children,
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="aspect-[4/3] w-full">
        <img className="w-full h-full object-cover object-center" src={imgProject} alt="image-project"/>
      </div>
      <h2 className="text-center font-bold text-lg mb-1">{title}</h2>
      <ul>
        {Children.map(children, (child) => (
          <li className="text-slate-600 ml-8 list-[circle]">{child}</li>
        ))}
      </ul>
      <div className="flex justify-center gap-5 mt-5">
        <LinkButton
          name="Github"
          srcIcon={faGithub}
          linkForward={linkGithub}
          canDownload={false}
          isForward={true}
        />
        <LinkButton
          name="Demo"
          srcIcon={faDesktop}
          linkForward={linkDemo}
          canDownload={false}
          isForward={true}
        />
      </div>
    </div>
  );
}
