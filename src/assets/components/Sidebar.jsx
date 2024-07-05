import classNames from "classnames";
import logo from "./../logo.png";
import { FiAlignJustify } from "react-icons/fi";

function Sidebar() {
  return (
    <nav className={classNames("icon", "site-navigation", "fixed")}>
      <div className="navigation-header flex p-6 bg-sky-900 items-center">
        <a href="/" className="w-20">
          <img src={logo} alt="logo" />
        </a>
        <button className="inline-flex p-0 m-0 ml-2.5 h-fit bg-transparent focus:outline-none">
          <FiAlignJustify />
        </button>
      </div>
      <ul className="navigation-body">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Skill</a>
        </li>
        <li>
          <a>Project</a>
        </li>
        <li>
          <a>Education</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
