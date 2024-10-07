import styles from '../css/RestaurantDetailModal.module.css';

function RestaurantDetailModal() {
    return (
        <div className={styles["modal modal--open"]}>
            <div class="modal-backdrop"></div>
            <div class="modal-container">
                <h2 class="modal-title text-title">음식점 이름</h2>
                <div class="restaurant-info">
                    <p class="restaurant-info__description text-body">음식점 소개 문구</p>
                </div>
                <div class="button-container">
                    <button class="button button--primary text-caption">닫기</button>
                </div>
            </div>
        </div>
    );
}

export default RestaurantDetailModal;