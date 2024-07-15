import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BrandIcon({srcIcon}) {
  return (
    <li className="flex flex-col items-center text-transparent">
      <a className="peer" href="/">
        <FontAwesomeIcon icon={srcIcon} />
      </a>
      <p className="text-sm peer-hover:text-white">Github</p>
    </li>
  );
}
