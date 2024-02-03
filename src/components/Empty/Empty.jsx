import styles from "./Empty.module.scss";

export default function Empty() {
  return (
    <>
      <div className={styles.emptyBox}>
        <img src="./images/empty-img.png" alt="epmptyImage" />
        <p>Empty...</p>
      </div>
    </>
  );
}
