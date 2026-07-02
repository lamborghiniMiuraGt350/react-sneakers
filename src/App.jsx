import { Card } from "./components/Card/Card";
import { Drawer } from "./components/Drawer/Drawer";
import { Header } from "./components/Header/Header";

const data = [
  { name: `Nike Blazer Mid Suede Men's Sneakers`, price: 300, image: '/img/main/Blazer.jpg' },
  { name: `Nike Air Max 270 Men's Sneakers`, price: 300, image: '/img/main/Air.jpg' },
  { name: `Nike Blazer Mid '77 Suede Sneakers`, price: 200, image: '/img/main/nike.jpg' },
  { name: `Puma X Aka Boku Future Rider Sneakers`, price: 200, image: '/img/main/puma.jpg' },
]

function App() {
  return (
    <div className="wrapper">
      <Drawer />

      <Header />

      <div className="content">
        <div className="content__inner">
          <h1 className="content__title">All Sneakers</h1>
          <div className="search-block">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="cards">
          {/* CARDS  */}
          {data.map(item => <Card
            name={item.name}
            price={item.price}
            image={item.image}/>)}
        </div>
      </div>
    </div >
  );
}

export default App;


