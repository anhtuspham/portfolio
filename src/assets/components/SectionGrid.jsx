import { Children } from "react";
import styles from "./SectionGrid.module.css";

export default function SectionGrid({ children }) {
  let childrenCount = Children.count(children);
  let gridColsClass = () => {
    if (childrenCount >= 3) {
      return "grid-cols-3";
    } else if (childrenCount === 2) {
      return "grid-cols-2";
    } else {
      return "grid-cols-1";
    }
  };
  return (
    <>
      <div className="w-3/5 mx-auto max-[1440px]:w-4/5">
        <div
          className={`grid ${gridColsClass()} gap-5 max-lg:grid-cols-${
            childrenCount >= 3 ? childrenCount - 1 : "2"
          } max-md:grid-cols-1 `}
        >
          {Children.map(children, (child) => (
            <div
              className={`bg-white p-4 w-full rounded-md h-full mb-10 shadow-md  ${styles.element}`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
