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

  const [ clickedRestaurantItem, setClickedRestaurantItem ] = useState(null);
  const [ showDetailModal, setShowDetailModal ] = useState(false);

  const handleOpenModal = (name, description) => {
    const restaurant = {
      name: name,
      description: description
    };
    setClickedRestaurantItem(restaurant);
    setShowDetailModal(true);
  };

  const handleCloseModal = () => {
    setShowDetailModal(false);
  }

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} onChangeModal={handleOpenModal} />
      </main>
      <aside>
        {showDetailModal && <RestaurantDetailModal restaurant={clickedRestaurantItem} onChangeModal={handleCloseModal} />}
        {/* <AddRestaurantModal /> */}
      </aside>
    </>
  );
}

export default App;
