import styles from "./style.module.scss";
export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className="text-gray-50 uppercase text-6xl font-extrabold">
        cv creator
      </h1>
    </header>
  )
}