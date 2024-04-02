import styles from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small className="text-gray-50 text-xl">
        Copyright &copy; {new Date().getFullYear()} Ziyaldinov Kamil
      </small>
      <a className="bg-github block w-8 h-8 hover:opacity-70 transition-all duration-200 ease-in-out cursor-pointer"></a>
    </footer>
  )
}