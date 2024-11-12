import styles from "../../css/RestaurantModal.module.css"

function Modal({ children, title, onClose }) {
    return (
        <div className={`${styles.modal} ${styles["modal--open"]}`}>
            <div className={styles["modal-backdrop"]} onClick={onClose}></div>
            <div className={styles["modal-container"]}>
                <h2 className={`${styles["modal-title"]} text-title`}>{title}</h2>
                {children}
            </div>
        </div>
    );
}

export default Modal;