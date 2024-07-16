import { useState, useEffect } from "react";

import {
  faUser,
  faHouse,
  faCompassDrafting,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";

import logo from "./../../logo.png";
import styles from "./Sidebar.module.css";
import MenuItem from "../../components/MenuItem";

function Sidebar() {
  const [active, setActive] = useState(true);
  const [activeMenuItem, setActiveMenuItem] = useState("home");

  function handleShowSideBar() {
    setActive((isActive) => !isActive);
  }

  function handleSetActiveMenu(item) {
    setActiveMenuItem(item);
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -100% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveMenuItem(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);
  return (
    <nav
      className={`${styles.siteNavigation} ${
        active ? styles.sidebarIsOpen : styles.sidebarIsNotOpen
      } w-full top-9 bottom-9 fixed`}
    >
      <div className={`relative w-full h-full rounded-lg bg-neutral-800`}>
        <div className="p-2.5 bg-sky-900 flex justify-center rounded-l-lg rounded-tr-lg">
          <a href="/" className="w-20 block">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className={`${styles.navigation}`}>
          <MenuItem
            menuItem="home"
            currentActiveMenuItem={activeMenuItem}
            srcIcon={faHouse}
            handleOnClick={() => handleSetActiveMenu("home")}
          />
          <MenuItem
            menuItem="about"
            currentActiveMenuItem={activeMenuItem}
            srcIcon={faUser}
            handleOnClick={() => handleSetActiveMenu("about")}
          />
          <MenuItem
            menuItem="skill"
            currentActiveMenuItem={activeMenuItem}
            srcIcon={faCompassDrafting}
            handleOnClick={() => handleSetActiveMenu("skill")}
          />
          <MenuItem
            menuItem="project"
            currentActiveMenuItem={activeMenuItem}
            srcIcon={faFileContract}
            handleOnClick={() => handleSetActiveMenu("project")}
          />
        </ul>
      </div>
      <button
        className={`absolute top-[97px] p-0 m-0 h-fit rounded-r focus:outline-none aspect-square ${styles.sideBarButton}`}
        onClick={handleShowSideBar}
      >
        <span
          className={`bg-white h-0.5 w-5 left-2 rounded-sm block absolute ${styles.sideBar}`}
        ></span>
        <span
          className={`bg-white h-0.5 w-5 left-2 rounded-sm block absolute ${styles.sideBar}`}
        ></span>
        <span
          className={`bg-white h-0.5 w-5 left-2 rounded-sm block absolute ${styles.sideBar}`}
        ></span>
        <span
          className={`bg-white h-0.5 w-[9px] left-2 rounded-sm block absolute ${styles.sideBar} ${styles.curve}`}
        ></span>
        <span
          className={`bg-white h-0.5 w-[9px] left-2 rounded-sm block absolute ${styles.sideBar} ${styles.curve}`}
        ></span>
      </button>
    </nav>
  );
}

export default Sidebar;
