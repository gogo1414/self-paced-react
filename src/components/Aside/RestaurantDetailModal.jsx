import styles from "../../css/RestaurantModal.module.css"
import Modal from "./Modal.jsx"

function RestaurantDetailModal({ restaurant, onChangeDetailModal }) {
    return (
        <Modal title={restaurant.name} onClose={onChangeDetailModal}>
            <div className={styles["restaurant-info"]}>
                    <p className={`${styles["restaurant-info__description"]} text-body`}>{restaurant.description}</p>
                </div>
                <div className={styles["button-container"]} onClick={onChangeDetailModal}>
                    <button className={`${styles.button} ${styles["button--primary"]} text-caption`}>닫기</button>
                </div>
        </Modal>
    );
}

export default RestaurantDetailModal;