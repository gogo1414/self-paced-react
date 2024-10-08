import styles from '../css/RestaurantList.module.css';

function RestaurantList( {restaurants} ) {
    return (
        <section className={styles['restaurant-list-container']}>
            <ul className={styles['restaurant-list']}>
                {restaurants.map((restaurant, index) => (
                    <RestaurantItem 
                        key={index}
                        name={restaurant.name}
                        description={restaurant.description}
                        category={restaurant.category}
                        alt={restaurant.alt}
                    />
                ))}
            </ul>   
        </section>
    );
}

function RestaurantItem({name, description, category, alt}) {
    return (
        <li className={styles['restaurant']}>
          <div className={styles['restaurant__category']}>
            <img src={`../../templates/category-${category}.png`} alt={alt} className={styles["category-icon"]}></img>
          </div>
          <div className={styles['restaurant__info']}>
            <h3 className={`${styles.restaurant__name} text-subtitle`}>{name}</h3>
            <p className={`${styles.restaurant__description} text-body`}>{description}</p>
          </div>
        </li>
    );
}

export default RestaurantList;