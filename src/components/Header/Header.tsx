import styles from "./Header.module.css";
import imageLogo from "../../assets/rocket.svg";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={imageLogo} />
                <h1>
                    <span className={styles.logoPrimaryText}>to</span>
                    <span className={styles.logoSecondaryText}>do</span>
                </h1>
            </div>
        </header>
    );
}
