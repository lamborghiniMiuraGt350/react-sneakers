import { useEffect, useState } from "react";
import { Card } from "./components/Card/Card";
import { Drawer } from "./components/Drawer/Drawer";
import { Header } from "./components/Header/Header";
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";

// const data = [
//   { name: `Nike Blazer Mid Suede Men's Sneakers`, price: 300, image: '/img/main/Blazer.jpg' },
//   { name: `Nike Air Max 270 Men's Sneakers`, price: 300, image: '/img/main/Air.jpg' },
//   { name: `Nike Blazer Mid '77 Suede Sneakers`, price: 200, image: '/img/main/nike.jpg' },
//   { name: `Puma X Aka Boku Future Rider Sneakers`, price: 200, image: '/img/main/puma.jpg' },
//   { name: `Under Armour Curry 8 Men's Shoes`, price: 350, image: '/img/main/under.jpg' },
//   { name: `Nike Kyrie 7 Men's Sneakers`, price: 180, image: '/img/main/kyrie.jpg' },
//   { name: `Men's Jordan Air Jordan 11 Sneakers`, price: 250, image: '/img/main/jordan.jpg' },
//   { name: `Nike LeBron XVIII Men's Sneakers`, price: 250, image: '/img/main/lebron.jpg' },
//   { name: `Nike Lebron XVIII Low Men's Sneakers`, price: 250, image: '/img/main/low.jpg' },
//   { name: `Nike Lebron XVIII Low Men's Sneakers`, price: 200, image: '/img/main/yrie.jpg' },
//   { name: `Nike Blazer Mid Suede Men's Sneakers`, price: 300, image: '/img/main/Blazer.jpg' },
//   { name: `Puma X Aka Boku Future Rider Sneakers`, price: 200, image: '/img/main/puma.jpg' }
// ]

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOppened, setCartOppened] = useState(false);

  useEffect(() => {
    axios.get('https://6a46f626a268c8be2ce869b2.mockapi.io/items')
      .then(data => setItems(data.data));

    axios.get('https://6a46f626a268c8be2ce869b2.mockapi.io/cart')
      .then(data => setCartItems(data.data));

    axios.get('https://6a4845b3abfcbaade1194b1e.mockapi.io/favorites')
      .then(data => setFavorites(data.data));
  }, []);

  if (cartOppened) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
        axios.delete(`https://6a46f626a268c8be2ce869b2.mockapi.io/cart/${obj.id}`);
      } else {
        axios.post('https://6a46f626a268c8be2ce869b2.mockapi.io/cart', obj);

        setCartItems(arr => [...arr, obj]);
      }
    } catch (error) {

    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(item => item.id === obj.id)) {
        axios.delete(`https://6a4845b3abfcbaade1194b1e.mockapi.io/favorites/${obj.id}`);
        setFavorites(prev => prev.filter(item => item.id !== obj.id))
      } else {
        const { data } = await axios.post('https://6a4845b3abfcbaade1194b1e.mockapi.io/favorites', obj);

        setFavorites(arr => [...arr, obj]);
      }

    } catch (error) {
      alert('Failed to add to favorite')
    }
  }

  const onRemoveCartItem = (id) => {
    axios.delete(`https://6a46f626a268c8be2ce869b2.mockapi.io/cart/${id}`);

    setCartItems(arr => arr.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  }
  return (
    <div className="wrapper">
      {cartOppened ? <Drawer
        items={cartItems}
        onClose={() => setCartOppened(false)}
        onRemove={onRemoveCartItem} /> : null}

      <Header onClickCart={() => setCartOppened(true)} />

      <Routes>
        <Route path='/' element={<Home items={items}
          searchValue={searchValue}
          setSearchValue={searchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart} />} />
        <Route path="/favorites" element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />} />
      </Routes>
    </div >
  );
}

export default App;


