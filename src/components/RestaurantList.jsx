import styles from '../css/RestaurantList.module.css';
import Restaurants from '../data/Restaurant.js'
import RestaurantItem from './Main/RestaurantItem.jsx';

function RestaurantList() {
    const restaurantList = Restaurants();

    return (
        <section className={styles['restaurant-list-container']}>
            <ul className={styles['restaurant-list']}>
                {restaurantList.map((restaurant) => (
                    <RestaurantItem 
                        key={restaurant.key}
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

export default RestaurantList;