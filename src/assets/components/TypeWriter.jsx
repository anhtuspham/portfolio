import { useEffect, useState } from "react";
import styles from './TypeWriter.module.css'

export default function TypeWriter({ speed, texts }) {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    let timer;
    const currentText = texts[currentTextIndex];

    if (isPause) {
      timer = setTimeout(() => {
        setIsDeleting((prevState) => !prevState);
        setIsPause(false);
      }, speed * 5);
    }

    else if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText((prevDisplayText) => {
          const newDisplayText = prevDisplayText.slice(0, -1);
          if (newDisplayText.length === 0) {
            setIsPause(true);
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }
          return newDisplayText;
        });
      }, speed / 2);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prevDisplayText) => {
          const newDisplayText = currentText.slice(
            0,
            prevDisplayText.length + 1
          );
          if (newDisplayText.length === currentText.length) {
            setIsPause(true);
          }
          return newDisplayText
        });
      }, speed);
    }
    return () => clearTimeout(timer);
  }, [speed, texts, isPause, isDeleting, currentTextIndex, displayText]);
  return (
    <div className={`${styles.typeWriter} min-h-8 `}>
      <span className="capitalize text-xl">{displayText}</span>
    </div>
  );
}
