import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuItem({
  menuItem,
  currentActiveMenuItem,
  srcIcon,
  handleOnClick,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById(menuItem).scrollIntoView({ behavior: "smooth" });
    handleOnClick();
    history.pushState(null, "", "");
  };
  return (
    <li>
      <a
        href={`#${menuItem}`}
        className={`${
          currentActiveMenuItem === menuItem ? "bg-slate-800 text-blue-600" : ""
        }`}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={srcIcon} />
        <h2 className="capitalize">{menuItem}</h2>
      </a>
    </li>
  );
}
