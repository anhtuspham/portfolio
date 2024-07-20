import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./BrandIcon.module.css";

export default function BrandIcon({ srcIcon, linkForward, brandName }) {
  return (
    <li className="flex mt-6 w-12 justify-center">
      <a className={`${styles.iconBrand} relative`} href={linkForward} target="_blank">
        <FontAwesomeIcon icon={srcIcon} />
        <span className={`${styles.textBrand} text-fuchsia-600`}>{brandName}</span>
      </a>
    </li>
  );
}
