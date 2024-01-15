// src/App.js
import React, { useState } from 'react';
import './App.css';
import dishesData from './Data.js';

const Dishes = ({ category, setCategory }) => {
  const filteredDishes = category
    ? dishesData.filter((dish) => dish.category === category)
    : dishesData;

  return (
    <div>
      <div className="categories">
        <span onClick={() => setCategory('')} id="filter-btn-all">All</span>
        <span onClick={() => setCategory('breakfast')} id="filter-btn-breakfast">Breakfast</span>
        <span onClick={() => setCategory('lunch')} id="filter-btn-lunch">Lunch</span>
        <span onClick={() => setCategory('shakes')} id="filter-btn-shakes">Shakes</span>
      </div>

      <div className="dishes" id="dishes-container">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="dish" id={`menu-item-${dish.category}`}>
            <h3>{dish.title}</h3>
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





