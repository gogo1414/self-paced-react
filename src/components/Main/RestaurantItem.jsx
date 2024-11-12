import styles from '../../css/RestaurantList.module.css';

function RestaurantItem({ name, description, category, alt, onClick }) {
    return (
        <li className={styles['restaurant']} onClick={onClick}>
          <div className={styles['restaurant__category']}>
            <img src={convertCategoryToImageSrc(category)} alt={alt} className={styles["category-icon"]}></img>
          </div>
          <div className={styles['restaurant__info']}>
            <h3 className={`${styles.restaurant__name} text-subtitle`}>{name}</h3>
            <p className={`${styles.restaurant__description} text-body`}>{description}</p>
          </div>
        </li>
    );
}

function convertCategoryToImageSrc(category) {
    if (category === "아시안")
        return "../../templates/category-asian.png";
    else if (category === "중식")
        return "../../templates/category-chinese.png";
    else if (category === "기타")
        return "../../templates/category-etc.png";
    else if (category === "일식")
        return "../../templates/category-japanese.png";
    else if (category === "한식")
        return "../../templates/category-korean.png";
    else if (category === "양식")
        return "../../templates/category-western.png";
}

export default RestaurantItem;