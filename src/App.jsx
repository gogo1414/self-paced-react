import "./App.css";
import Header from "./components/Header/Header.jsx";
import CategoryFilter from "./components/Main/CategoryFilter.jsx";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal.jsx";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal.jsx";
import RestaurantList from "./components/Main/RestaurantList.jsx"
import Restaurants from "./data/Restaurant.js";
import { useState } from "react";

function App() {
  const [restaurantList, setRestaurantList] = useState(Restaurants());
  const [ category, setCategory ] = useState("전체");

  const filteredRestaurants = category === "전체" ? restaurantList : restaurantList.filter(
    (restaurant) => restaurant.category === category
  );

  const [ clickRestaurantItem, setClickRestaurantItem ] = useState(null);
  const [ showDetailModal, setShowDetailModal ] = useState(false);
  const [ showAddModal, setShowAddModal ] = useState(false);
  
  const selectedRestaurant = restaurantList.find(
      (restaurant) => restaurant.name === clickRestaurantItem
  )

  const handleOpenDetailModal = (restaurantName) => {
    setClickRestaurantItem(restaurantName);
    setShowDetailModal(true);
  };

  const handleCloseDetailModal = () => {
    setShowDetailModal(false);
  }

  const handleOpenAddModal = () => {
    setShowAddModal(true);
  }

  const handleCloseAddModal = (event) => {
    const formData = new FormData(event);
    const formJson = Object.fromEntries(formData.entries());
    const newRestaurant = {
      id: Date.now(),
      name: formJson.name,
      description: formJson.description,
      category: formJson.category
    };
    setRestaurantList([...restaurantList, newRestaurant]);
    setShowAddModal(false);
  }

  return (
    <>
      <Header onChangeAddModal={handleOpenAddModal}/>
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} onChangeDetailModal={handleOpenDetailModal} />
      </main>
      <aside>
        {showDetailModal && <RestaurantDetailModal restaurant={selectedRestaurant} onChangeDetailModal={handleCloseDetailModal} />}
        {showAddModal && <AddRestaurantModal onChangeAddModal={handleCloseAddModal} />}
      </aside>
    </>
  );
}

export default App;
