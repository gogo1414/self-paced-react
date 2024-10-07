import styles from "../css/CategoryFilter.module.css"; 

function CategoryFilter() {
    const category = [ '전체', '한식', '중식', '일식', '양식', '아시안', '기타' ];

    return (
        <section className={styles['restaurant-filter-container']}>
            <select name="category" id="category-filter" className={styles["restaurant-filter"]} aria-label="음식점 카테고리 필터">
                {category.map((categoryItem, index) => (
                    <option key = {index} value={categoryItem}>{categoryItem}</option>
                ))}
            </select>
        </section>
    );
}

export default CategoryFilter;