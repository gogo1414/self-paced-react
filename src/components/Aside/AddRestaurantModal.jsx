import Categories from "../../data/Category.js";
import styles from "../../css/RestaurantModal.module.css";
import Modal from "./Modal.jsx"

function AddRestaurantModal({ onFormSubmit, onChangeAddModal }) {
    const categories = Categories().filter(
        (category) => category.name !== "전체"
    );

    const handleSubmit = (event) => {
        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());
        onFormSubmit(formJson);
    }

    return (
        <Modal 
            title="새로운 음식점" 
            onClose={onChangeAddModal}
        >
            <form method="post" onSubmit={handleSubmit}>
                <div className={`${styles["form-item"]} ${styles["form-item--required"]}`}>
                    <label htmlFor="category" className="text-caption">카테고리</label>
                    <select name="category" id="category" required>
                        <option value="">선택해 주세요</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.name}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className={`${styles["form-item"]} ${styles["form-item--required"]}`}>
                    <label htmlFor="name" className="text-caption">이름</label>
                    <input type="text" name="name" id="name" required></input>
                </div>
                <div className={styles["form-item"]}>
                    <label htmlFor="description" className="text-caption">설명</label>
                    <textarea name="description" id="description" cols="30" rows="5"></textarea>
                    <span className={`${styles["help-text"]} text-caption`}>메뉴 등 추가 정보를 입력해 주세요.</span>
                </div>
                <div className={styles["button-container"]}>
                    <button className={`${styles.button} ${styles["button--primary"]} text-caption`}>추가하기</button>
                </div>
            </form>
        </Modal>
    ); 
}

export default AddRestaurantModal;