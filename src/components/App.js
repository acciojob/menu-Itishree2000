import React, { useState } from 'react';

const dishesData = [
  // ... your dish data
];

const App = () => {
  const [category, setCategory] = useState('All');
  const [displayedDishes, setDisplayedDishes] = useState(dishesData);

  const filterDishesByCategory = (selectedCategory) => {
    if (selectedCategory === 'All') {
      setDisplayedDishes(dishesData);
    } else {
      const filteredDishes = dishesData.filter((dish) => dish.category === selectedCategory);
      setDisplayedDishes(filteredDishes);
    }
    setCategory(selectedCategory);
  };

  return (
    <div>
      {/* Category buttons */}
      <div className="categories">
        <button onClick={() => filterDishesByCategory('All')}>All</button>
        <button onClick={() => filterDishesByCategory('Breakfast')}>Breakfast</button>
        <button onClick={() => filterDishesByCategory('Lunch')}>Lunch</button>
        <button onClick={() => filterDishesByCategory('Shakes')}>Shakes</button>
      </div>

      {/* Display dishes */}
      <div className="dishes">
        {displayedDishes.map((dish) => (
          <div key={dish.id}>
            <img src={dish.img} alt={dish.title} />
            <h3>{dish.title}</h3>
            <p>{dish.desc}</p>
            <p>${dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;






