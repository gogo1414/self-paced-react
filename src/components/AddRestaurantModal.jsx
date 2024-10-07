import styles from '../css/RestaurantModal.module.css';

function AddRestaurantModal() {
    return (
        <div class={styles["modal modal--open"]}>
            <div class="modal-backdrop"></div>
            <div class="modal-container">
                <h2 class="modal-title text-title">새로운 음식점</h2>
                <form>
                    <div class="form-item form-item--required">
                        <label for="category text-caption">카테고리</label>
                        <select name="category" id="category" required>
                            <option value="">선택해 주세요</option>
                            <option value="한식">한식</option>
                            <option value="중식">중식</option>
                            <option value="일식">일식</option>
                            <option value="양식">양식</option>
                            <option value="아시안">아시안</option>
                            <option value="기타">기타</option>
                        </select>
                    </div>

                    <div class="form-item form-item--required">
                        <label for="name text-caption">이름</label>
                        <input type="text" name="name" id="name" required></input>
                    </div>

                    <div class="form-item">
                        <label for="description text-caption">설명</label>
                        <textarea name="description" id="description" cols="30" rows="5"></textarea>
                        <span class="help-text text-caption">메뉴 등 추가 정보를 입력해 주세요.</span>
                    </div>

                    <div class="button-container">
                        <button class="button button--primary text-caption">추가하기</button>
                    </div>
                </form>
            </div>
        </div>
    ); 
}

export default AddRestaurantModal;