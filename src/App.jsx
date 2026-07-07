import React, { useEffect, useState } from "react";
import { Drawer } from "./components/Drawer/Drawer";
import { Header } from "./components/Header/Header";
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { AppContext } from "./context";
import { Orders } from "./pages/Orders";
import { Slider } from "./components/Slider/Slider";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([axios.get('https://6a46f626a268c8be2ce869b2.mockapi.io/cart'), axios.get('https://6a4845b3abfcbaade1194b1e.mockapi.io/favorites'), axios.get('https://6a46f626a268c8be2ce869b2.mockapi.io/items')]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Error while requesting data')
        console.error(error);
      }
    }

    fetchData();
  }, []);


  // if (cartOppened) {
  //   document.body.style.overflow = 'hidden';
  // } else {
  //   document.body.style.overflow = '';
  // }

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)))
        await axios.delete(`https://6a46f626a268c8be2ce869b2.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems(arr => [...arr, obj]);
        const { data } = await axios.post('https://6a46f626a268c8be2ce869b2.mockapi.io/cart', obj);

        setCartItems(arr => arr.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            };
          }
          return item;
        }));
      }
    } catch (error) {
      alert('Error adding to cart')
      console.error(error);
    }
  }
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://6a4845b3abfcbaade1194b1e.mockapi.io/favorites/${obj.id}`);
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post('https://6a4845b3abfcbaade1194b1e.mockapi.io/favorites', obj);

        setFavorites(arr => [...arr, data]);
      }

    } catch (error) {
      alert('Failed to add to favorite')
      console.error(error);
    }
  }

  const onRemoveCartItem = (id) => {
    try {
      axios.delete(`https://6a46f626a268c8be2ce869b2.mockapi.io/cart/${id}`);
      setCartItems(arr => arr.filter(item => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Error deleting from the cart');
      console.error(error);
    }
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }
  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, onAddToCart, setCartOppened, setCartItems }}>
      <div className="wrapper">
        <Drawer items={cartItems} onClose={() => setCartOppened(false)} onRemove={onRemoveCartItem} oppened={cartOppened} />

        <Header onClickCart={() => setCartOppened(true)} />
        <Slider />
        <Routes>
          <Route path='/' element={
            <Home items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div >
    </AppContext.Provider>
  );
}

export default App;


