import styles from "./Board.module.css"

export default function Board({ children }) {
  return (
    <div className={`bg-white p-4 w-2/6 rounded-md h-max mb-10 shadow-md  ${styles.element}`}>{children}</div>
  );
}
