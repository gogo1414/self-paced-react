import styles from '../../css/RestaurantList.module.css';
import RestaurantItem from './RestaurantItem.jsx';

function RestaurantList( {restaurants, onChangeRestaurant} ) {
    return (
        <section className={styles['restaurant-list-container']}>
            <ul className={styles['restaurant-list']}>
                {restaurants.map((restaurant) => (
                    <RestaurantItem 
                        key={restaurant.id}
                        name={restaurant.name}
                        description={restaurant.description}
                        category={restaurant.category}
                        alt={restaurant.alt}
                        onClick={() => onChangeRestaurant(restaurant.name)}
                    />
                ))}
            </ul>   
        </section>
    );
}

export default RestaurantList;