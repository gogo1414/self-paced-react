import "./App.css";
import Header from "./components/Header/Header.jsx";
import CategoryFilter from "./components/Main/CategoryFilter.jsx";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal.jsx";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal.jsx";
import RestaurantList from "./components/Main/RestaurantList.jsx"
import getRestaurants from "./data/Restaurant.js";
import { useState } from "react";

function App() {
  const [ restaurantList, setRestaurantList ] = useState(getRestaurants());
  const [ category, setCategory ] = useState("전체");
  const [ clickedRestaurantItem, setClickedRestaurantItem ] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState({
    detail: false,
    add: false,
  });

  const filteredRestaurants = category === "전체" ? restaurantList : restaurantList.filter(
    (restaurant) => restaurant.category === category
  );

  const toggleModal = (modalType, isOpen, restaurant = null) => {
    setIsModalOpen((prev) => ({ ...prev, [modalType]: isOpen }));

    if (modalType === "detail" && isOpen && restaurant) {
      setClickedRestaurantItem(restaurant);
    } else if (modalType === "add" && !isOpen && restaurant) {
      addRestaurant(restaurant);
    }
  };

  return (
    <>
      <Header 
        onChangeAddModal={() => toggleModal("add", true)}
      />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList 
          restaurants={filteredRestaurants} 
          onChangeDetailModal={(name, description) => toggleModal("detail", true, { name, description })
          }
        />
      </main>
      <aside>
        {isModalOpen.detail && 
          <RestaurantDetailModal 
            restaurant={clickedRestaurantItem} 
            onChangeDetailModal={() => toggleModal("detail", false)}
          />
        }
        {isModalOpen.add && 
          <AddRestaurantModal 
            onFormSubmit={(event) => toggleModal("add", false, event)}
            onChangeAddModal={() => toggleModal("add", false)}
          />
        }
      </aside>
    </>
  );

  function addRestaurant(restaurant) {
    const newRestaurant = {
      id: Date.now(),
      name: restaurant.name,
      description: restaurant.description,
      category: restaurant.category
    };
    setRestaurantList([...restaurantList, newRestaurant]);
  }
}

export default App;
