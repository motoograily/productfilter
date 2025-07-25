import { useState } from 'react'
import './App.css'

const getFilteredProducts = (query, category, items) => {
    return items.filter(item => {
      const matchesQuery = !query || item.name.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = !category || item.category === category;
      return matchesQuery && matchesCategory;
    });
}

function App() {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");

  const products = [
    { id: 1, name: "Apple iPhone 13", category: "Smartphone" },
    { id: 2, name: "Samsung Galaxy S21", category: "Smartphone" },
    { id: 3, name: "Sony WH-1000XM4", category: "Headphones" },
    { id: 4, name: "Dell XPS 13", category: "Laptop" },
    { id: 5, name: "Apple MacBook Pro", category: "Laptop" },
    { id: 6, name: "Google Pixel 6", category: "Smartphone" },
    { id: 7, name: "Bose QuietComfort 35 II", category: "Headphones" },
    { id: 8, name: "HP Spectre x360", category: "Laptop" },
    { id: 9, name: "Apple AirPods Pro", category: "Headphones" },
    { id: 10, name: "Microsoft Surface Pro 7", category: "Laptop" }
  ]

  const filteredProducts = getFilteredProducts(query, value, products);

  const handleSelect = (e) => {
    setValue(e.target.value);
  }

  return (
    <div style={{backgroundColor: "black", color: "white"}}>
      <div style={{position: "relative", height: "200px", backgroundColor: "black", color: "white"}}>

        <div className="content">
          <label >Search</label>
          <input type="text" onChange={ (e) => setQuery(e.target.value)}/>
          <div>
            <select className='form-select' value={value} onChange={handleSelect}>
              <option value="">All Categories</option>
              {[...new Set(products.map(product => product.category))].map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div> 
      <ul style={{backgroundColor: "black", color: "white"}}>
        {filteredProducts.map(product => <h1 key={product.id}>{product.name}</h1>)}
      </ul>
    </div>
  )
}


export default App