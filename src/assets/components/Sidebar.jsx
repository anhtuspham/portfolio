import { useState } from "react";

import logo from "./../logo.png";
import styles from "./Sidebar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHouse,
  faCompassDrafting,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [active, setActive] = useState(true);

  function handleShowSideBar() {
    setActive((isActive) => !isActive);
  }
  return (
    <nav className={`${styles.siteNavigation} ${active ? styles.sidebarIsOpen : styles.sidebarIsNotOpen} h-full w-full top-10 fixed`}>
      <div className={`${styles.siteSidebar} relative w-full h-full bg-neutral-800`}>
        <div className="p-2.5 bg-sky-900 flex justify-center rounded-l-lg rounded-tr-lg">
          <a href="/" className="w-20 block">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className={`${styles.navigation}`}>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faHouse} />
              <h2>Home</h2>
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faUser} />
              <h2>About</h2>
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faCompassDrafting} />
              <h2>Skill</h2>
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faFileContract} />
              <h2>Project</h2>
            </a>
          </li>
        </ul>
      </div>
      <button
        className={`absolute top-[86px] p-0 m-0 h-fit rounded-r focus:outline-none aspect-square ${styles.sideBarButton}`}
        onClick={handleShowSideBar}
      >
        <span
          className={`bg-white h-0.5 w-5 left-3 rounded-sm block absolute ${styles.sideBar}`}
        ></span>
        <span
          className={`bg-white h-0.5 w-5 left-3 rounded-sm block absolute ${styles.sideBar}`}
        ></span>
        <span
          className={`bg-white h-0.5 w-5 left-3 rounded-sm block absolute ${styles.sideBar}`}
        ></span>
        <span
          className={`bg-white h-0.5 w-[9px] left-3 rounded-sm block absolute ${styles.sideBar} ${styles.curve}`}
        ></span>
        <span
          className={`bg-white h-0.5 w-[9px] left-3 rounded-sm block absolute ${styles.sideBar} ${styles.curve}`}
        ></span>
      </button>
    </nav>
  );
}

export default Sidebar;
