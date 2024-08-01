import styles from "./Board.module.css"

export default function Board({ children }) {
  return (
    <div className={`bg-white p-4 w-full rounded-md h-full mb-10 shadow-md  ${styles.element}`}>{children}</div>
  );
}
