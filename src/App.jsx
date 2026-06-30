import { Card } from "./components/Card";
import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";


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
          {/* <div className="card">
            <div className="favorite"><img src="/img/icons/like-start.svg" alt="" /></div>
            <img width={133} height={112} src="/img/main/Blazer.jpg" alt="Sneaker" />
            <h5>Nike Blazer Mid Suede Men's Sneakers</h5>
            <div className="card__bottom">
              <div className="card__info">
                <p className="card__info-text">Price:</p>
                <p className="card__info-price">300 $</p>
              </div>
              <button className="button">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                  <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                </svg>
              </button>
            </div>
          </div> */}
          <Card />
          <Card />
          <Card />
          <Card />
          {/* <div className="card">
            <div className="favorite"><img src="/img/icons/like-start.svg" alt="" /></div>
            <img width={133} height={112} src="/img/main/Air.jpg" alt="Sneaker" />
            <h5>Nike Air Max 270 Men's Sneakers</h5>
            <div className="card__bottom">
              <div className="card__info">
                <p className="card__info-text">Price:</p>
                <p className="card__info-price">300 $</p>
              </div>
              <button className="button">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                  <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite"><img src="/img/icons/like-start.svg" alt="" /></div>
            <img width={133} height={112} src="/img/main/nike.jpg" alt="Sneaker" />
            <h5>Nike Blazer Mid Suede Men's Sneakers</h5>
            <div className="card__bottom">
              <div className="card__info">
                <p className="card__info-text">Price:</p>
                <p className="card__info-price">200 $</p>
              </div>
              <button className="button">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                  <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                </svg>
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite"><img src="/img/icons/like-start.svg" alt="" /></div>
            <img width={133} height={112} src="/img/main/puma.jpg" alt="Sneaker" />
            <h5>Puma X Aka Boku Future Rider Sneakers</h5>
            <div className="card__bottom">
              <div className="card__info">
                <p className="card__info-text">Price:</p>
                <p className="card__info-price">200 $</p>
              </div>
              <button className="button">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                  <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                </svg>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div >
  );
}

export default App;


