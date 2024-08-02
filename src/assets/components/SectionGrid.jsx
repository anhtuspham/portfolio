import { Children } from "react";
import styles from "./SectionGrid.module.css";

export default function SectionGrid({ children }) {
  let childrenCount = Children.count(children);
  console.log(childrenCount);
  return (
    <>
      <div className="w-3/5 mx-auto max-xl:w-4/5">
        <div
          className={`grid grid-cols-${childrenCount} gap-5 max-lg:grid-cols-${
            childrenCount >= 3 ? childrenCount - 1 : "2"
          } max-md:grid-cols-${childrenCount >= 3 ? childrenCount - 2 : "1"} `}
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
