import styles from '../../css/RestaurantList.module.css';
import RestaurantItem from './RestaurantItem.jsx';

function RestaurantList( {restaurants} ) {
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
                    />
                ))}
            </ul>   
        </section>
    );
}

export default RestaurantList;