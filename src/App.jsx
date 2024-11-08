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
  const [ clickedRestaurantItem, setClickedRestaurantItem ] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState({
    detail: false,
    add: false,
  });

  const filteredRestaurants = category === "전체" ? restaurantList : restaurantList.filter(
    (restaurant) => restaurant.category === category
  );

  const toggleModal = (modalType, isOpen, detailData = null, event = null) => {
    setIsModalOpen((prev) => ({ ...prev, [modalType]: isOpen }));

    if (modalType === "detail" && isOpen && detailData) {
      setClickedRestaurantItem(detailData);
    } else if (modalType === "add" && !isOpen && event) {
      addRestaurant(event);
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
            onChangeAddModal={(event) => toggleModal("add", false, null, event)}
          />
        }
      </aside>
    </>
  );

  function addRestaurant(event) {
    const formData = new FormData(event);
    const formJson = Object.fromEntries(formData.entries());
    const newRestaurant = {
      id: Date.now(),
      name: formJson.name,
      description: formJson.description,
      category: formJson.category
    };
    setRestaurantList([...restaurantList, newRestaurant]);
  }
}

export default App;
