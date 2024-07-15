import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuItem({
  menuItem,
  currentActiveMenuItem,
  srcIcon,
  handleOnClick,
}) {
  return (
    <li>
      <a
        href={`#${menuItem}`}
        className={`${
          currentActiveMenuItem === menuItem ? "bg-slate-800 text-blue-600" : ""
        }`}
        onClick={handleOnClick}
      >
        <FontAwesomeIcon icon={srcIcon} />
        <h2 className="capitalize">{menuItem}</h2>
      </a>
    </li>
  );
}
