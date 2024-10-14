import Categories from "../../data/Category.js";
import styles from "../../css/CategoryFilter.module.css"; 

function CategoryFilter({ category, onChangeCategory }) {
    const categoryList = Categories();

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
                {categoryList.map((category) => (
                    <option key = {category.id} value={category.name}>{category.name}</option>
                ))}
            </select>
        </section>
    );
}

export default CategoryFilter;