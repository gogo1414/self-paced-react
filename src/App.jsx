import "./App.css";
import Header from "./components/Header/Header.jsx";
import CategoryFilter from "./components/Main/CategoryFilter.jsx";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal.jsx";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal.jsx";
import RestaurantList from "./components/Main/RestaurantList.jsx"
import Restaurants from "./data/Restaurant.js";
import { useState } from "react";

function App() {
  const [ category, setCategory ] = useState("전체");
  const restaurantList = Restaurants();

  const filteredRestaurants = category === "전체" ? restaurantList : restaurantList.filter(
    (restaurant) => restaurant.category === category
  );

  const [ clickRestaurantItem, setClickRestaurantItem ] = useState(null);
  const [ showDetailModal, setShowDetailModal ] = useState(false);
  
  const selectedRestaurant = restaurantList.filter(
      (restaurant) => restaurant.name === clickRestaurantItem
  )

  const handleRestaurantClick = (restaurantName) => {
    console.log("클릭했습니다.");
    setClickRestaurantItem(restaurantName);
    setShowDetailModal(true);
  };

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} onChangeRestaurant={handleRestaurantClick} />
      </main>
      <aside>
        {showDetailModal && <RestaurantDetailModal restaurant={selectedRestaurant} />}
        {/* <AddRestaurantModal /> */}
      </aside>
    </>
  );
}

export default App;
