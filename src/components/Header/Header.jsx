import styles from "../../css/Header.module.css";

function Header({ onChangeAddModal }) {
    return (
        <header className={styles.gnb}>
            <h1 className={`${styles.gnb__title} text-title`}>점심 뭐 먹지</h1>
            <button type="button" className={styles.gnb__button} aria-label="음식점 추가" onClick={onChangeAddModal}>
                <img src="../templates/add-button.png" alt="음식점 추가"></img>
            </button>
        </header>
    );
}

export default Header;