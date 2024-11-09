import "./App.css";
import Header from "./components/Header/Header.jsx";
import CategoryFilter from "./components/Main/CategoryFilter.jsx";
import RestaurantDetailModal from "./components/Aside/RestaurantDetailModal.jsx";
import AddRestaurantModal from "./components/Aside/AddRestaurantModal.jsx";
import RestaurantList from "./components/Main/RestaurantList.jsx"
import { useState } from "react";
import { useRestaurants } from "./hooks/useRestaurants.js";

function App() {
  const { restaurants, addRestaurant } = useRestaurants();
  const [ category, setCategory ] = useState("전체");
  const [ clickedRestaurantItem, setClickedRestaurantItem ] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState({
    detail: false,
    add: false,
  });

  const filteredRestaurants = category === "전체" ? restaurants : restaurants.filter(
    (restaurant) => restaurant.category === category
  );

  const toggleModal = (modalType, isOpen, detailData = null, event = null) => {
    setIsModalOpen((prev) => ({ ...prev, [modalType]: isOpen }));

    if (modalType === "detail" && isOpen && detailData) {
      setClickedRestaurantItem(detailData);
    } else if (modalType === "add" && !isOpen && event) {
      addRestaurant({
        id: Date.now(),
        name: event.name,
        description: event.description,
        category: event.category
      });
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
            onFormSubmit={(event) => toggleModal("add", false, null, event)}
            onChangeAddModal={() => toggleModal("add", false)}
          />
        }
      </aside>
    </>
  );
}

export default App;
