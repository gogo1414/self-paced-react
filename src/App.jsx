import "./App.css";
import Header from "./components/Header/Header.jsx";
import CategoryFilter from "./components/Main/CategoryFilter.jsx";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal.jsx";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal.jsx";
import RestaurantList from "./components/Main/RestaurantList.jsx"
import Restaurants from "./data/Restaurant.js";
import { useState } from "react";

function App() {
  const [ restaurantList, setRestaurantList ] = useState(Restaurants());
  const [ category, setCategory ] = useState("전체");
  const [ clickRestaurantItem, setClickRestaurantItem ] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState({
    detail: false,
    add: false,
  });

  const filteredRestaurants = category === "전체" ? restaurantList : restaurantList.filter(
    (restaurant) => restaurant.category === category
  );
  
  const selectedRestaurant = restaurantList.find(
      (restaurant) => restaurant.name === clickRestaurantItem
  )

  const openDetailModal = (restaurantName) => {
    setClickRestaurantItem(restaurantName);
    setIsModalOpen((prev) => ({ ...prev, detail: true }));
  };

  const closeDetailModal = () => {
    setIsModalOpen((prev) => ({ ...prev, detail: false }));
  }

  const openAddModal = () => {
    setIsModalOpen((prev) => ({ ...prev, add: true }));
  }

  const closeAddModal = (event) => {
    const formData = new FormData(event);
    const formJson = Object.fromEntries(formData.entries());
    const newRestaurant = {
      id: Date.now(),
      name: formJson.name,
      description: formJson.description,
      category: formJson.category
    };
    setRestaurantList([...restaurantList, newRestaurant]);
    setIsModalOpen((prev) => ({ ...prev, add: false }));
  }

  return (
    <>
      <Header onChangeAddModal={openAddModal}/>
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} onChangeDetailModal={openDetailModal} />
      </main>
      <aside>
        {isModalOpen.detail && <RestaurantDetailModal restaurant={selectedRestaurant} onChangeDetailModal={closeDetailModal} />}
        {isModalOpen.add && <AddRestaurantModal onChangeAddModal={closeAddModal} />}
      </aside>
    </>
  );
}

export default App;
