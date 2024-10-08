import { useState } from "react";
import styles from "../css/CategoryFilter.module.css"; 

function CategoryFilter({ category, onChangeCategory }) {
    const categoryList = [ "전체", "한식", "중식", "일식", "양식", "아시안", "기타" ];

    return (
        <section className={styles['restaurant-filter-container']}>
            <select 
                name="category" 
                id="category-filter" 
                className={styles["restaurant-filter"]} 
                aria-label="음식점 카테고리 필터"
                value={category}
                onChange={(event) => onChangeCategory(event.target.value)}
            >
                {categoryList.map((categoryItem, index) => (
                    <option key = {index} value={categoryItem}>{categoryItem}</option>
                ))}
            </select>
        </section>
    );
}

export default CategoryFilter;