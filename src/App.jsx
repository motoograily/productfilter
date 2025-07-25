import { useState } from 'react'
import './App.css'
import luffy from './assets/luffy.webp'
import zoro from './assets/zoro.webp'
import sanji from './assets/sanji.webp'
import shanks from './assets/shanks.webp'
import mihawk from './assets/mihawk.webp'
import law from './assets/law.webp'
import bigMom from './assets/big mom.webp'
import kaido from './assets/kaido.webp'
import robin from './assets/robin.webp'
import whitebeard from './assets/whitebeard.webp'
import ace from './assets/ace.webp'
import kid from './assets/kid.webp'

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
    { id: 1, name: "luffy", category: "strawhat pirate", image: luffy },
    { id: 2, name: "zoro", category: "strawhat pirate", image: zoro },
    { id: 3, name: "sanji", category: "strawhat pirate", image: sanji },
    { id: 4, name: "shanks", category: "emperor", image: shanks },
    { id: 5, name: "mihawk", category: "warlord", image: mihawk },
    { id: 6, name: "law", category: "warlord", image: law },
    { id: 7, name: "big mom", category: "emperor", image: bigMom },
    { id: 8, name: "kaido", category: "emperor", image: kaido },
    { id: 9, name: "robin", category: "strawhat pirate", image: robin },
    { id: 10, name: "whitebeard", category: "emperor", image: whitebeard },
    {id: 11, name: "ace", category: "spade pirate", image: ace },
    {id: 12, name: "kid", category: "kid pirate", image: kid }
  ]

  const filteredProducts = getFilteredProducts(query, value, products);

  const handleSelect = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className='App'>
      <div style={{position: "relative", height: "200px"}}>

        <div className="content">
          <label >wanted(dead or alive)</label>
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
      <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: "7rem", paddingLeft: "2rem"}}>
        {filteredProducts.map(product => (
          <li key={product.id} style={{display: "flex", alignItems: "center", marginBottom: "1rem", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", padding: "2rem"}}>
            <img src={product.image} alt={product.name} style={{width: 150, height: 150, marginRight: 16, borderRadius: 8}} />
            <h1 style={{margin: 0, fontSize: "1.2rem", paddingLeft: "2rem"}}>{product.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default App