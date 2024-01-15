// src/App.js
import React, { useState } from 'react';
import './App.css';
import dishesData from './Data.js'; // Import the dish data

const Dishes = ({ category, setCategory }) => {
  // Filter dishes based on the selected category or show all dishes by default
  const filteredDishes = category
    ? dishesData.filter((dish) => dish.category === category)
    : dishesData;

  return (
    <div className="dishes-container">
      {/* Category buttons */}
      <div className="categories">
      <span id="filter-btn-all" onClick={() => setCategory('')}>All</span>
        <span id="filter-btn-1" onClick={() => setCategory('breakfast')}>Breakfast</span>
        <span id="filter-btn-2" onClick={() => setCategory('lunch')}>Lunch</span>
        <span id="filter-btn-3" onClick={() => setCategory('shakes')}>Shakes</span>
        {/* Add more category spans as needed */}
      </div>

      {/* Display filtered dishes */}
      <div className="dishes">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="dish">
            {/* Render individual dish information */}
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

function App() {
  const [category, setCategory] = useState('');

  return (
    <div className="App" id="main">
      <header className="App-header">
        <h1>Our Menu</h1>
        <Dishes category={category} setCategory={setCategory} />
      </header>
    </div>
  );
}

export default App;



