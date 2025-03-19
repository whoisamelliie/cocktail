import React, { useState } from "react";

const Cocktail = () => {
  const [cocktailName, setCocktailName] = useState('');
  const [cocktailData, setCocktailData] = useState(null);

  const fetchCocktail = async () => {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/cocktail?name=${cocktailName}`,
        {
          headers: { 'X-Api-Key': "Xy9Q+70yp29krG+EuF8hOw==18AQOlYXnU3iLinr" }
        }
      );

      if (!response.ok) {
        throw new Error('Error fetching data');
      }

      const data = await response.json();
      if (data.length === 0) {
        setCocktailData(null);
        alert('Cocktail not found!');
      } else {
        setCocktailData(data[0]);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search for a Cocktail 🍹</h1>
      <input
        type="text"
        value={cocktailName}
        onChange={(e) => setCocktailName(e.target.value)}
        placeholder="Enter the cocktail name"
        className="border p-2 w-full rounded mb-2"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={fetchCocktail}>
        Search
      </button>

      {cocktailData && (
        <div className="mt-4 p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{cocktailData.name}</h2>

          <h3 className="font-bold">Ingredients:</h3>
          <ul className="list-disc list-inside mb-2">
            {cocktailData.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h3 className="font-bold">Instructions:</h3>
          <p>{cocktailData.instructions}</p>
        </div>
      )}
    </div>
  );
};

export default Cocktail;



// Margarita
// Bloody Mary
// Mojito
// Cosmopolitan
// Martini
// Whiskey Sour
// Mai Tai
// Long Island Iced Tea
// Old Fashioned