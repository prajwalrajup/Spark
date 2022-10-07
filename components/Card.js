import styles from "./Card.module.css";

export default function Footer({ text, onClick }) {
  return (
    <div onClick={onClick} className={styles.cardContainer}>
      {text === undefined ? (
        <img src="/cardSpark.svg" alt="Heart Logo" />
      ) : (
        text
      )}
    </div>
  );
}
