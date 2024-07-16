import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BrandIcon({ srcIcon }) {
  return (
    <li className="flex items-center">
      <p className="text-sm peer-hover:text-white">Github</p>
      <a className="peer" href="/">
        <FontAwesomeIcon icon={srcIcon} />
      </a>
    </li>
  );
}
