import styles from "../../css/RestaurantModal.module.css"

function RestaurantDetailModal({ restaurant }) {
    return (
        <div className={`${styles.modal} ${styles["modal--open"]}`}>
            <div className={styles["modal-backdrop"]}></div>
            <div className={styles["modal-container"]}>
                <h2 className={`${styles["modal-title"]} text-title`}>{restaurant.name}</h2>
                <div className={styles["restaurant-info"]}>
                    <p className={`${styles["restaurant-info__description"]} text-body`}>{restaurant.description}</p>
                </div>
                <div className={styles["button-container"]}>
                    <button className={`${styles.button} ${styles["button--primary"]} text-caption`}>닫기</button>
                </div>
            </div>
        </div>
    );
}

export default RestaurantDetailModal;