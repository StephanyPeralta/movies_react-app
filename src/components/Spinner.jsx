import { CgSpinnerTwoAlt } from "react-icons/cg";
import styles from "./Spinner.module.css";

export function Spinner() {
    return (
        <div className={styles.spinner}>
            <CgSpinnerTwoAlt className={styles.rotate} size={60} />
        </div>
    )
}
