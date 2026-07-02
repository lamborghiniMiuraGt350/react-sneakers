import './drawer.scss';

export function Drawer() {
    return (
        <div className="overlay" style={{ display: 'none' }}>
            <div className="drawer">
                <h2>Cart <img className="remove__btn" width={32} height={32} src="/img/icons/btn-remove.svg" alt="button" /></h2>

                <div className="items">
                    <div className="cart__item">
                        <div style={{ backgroundImage: 'url(/img/main/Air.jpg)' }} className="cart-item-img">
                        </div>
                        <div className="cart__info">
                            <p>Nike Air Max 270 Men's Sneakers</p>
                            <p>300 $</p>
                        </div>
                        <img className="remove__btn" src="/img/icons/btn-remove.svg" alt="button" />
                    </div>
                    <div className="cart__item">
                        <div style={{ backgroundImage: 'url(/img/main/Air.jpg)' }} className="cart-item-img">
                        </div>
                        <div className="cart__info">
                            <p>Nike Air Max 270 Men's Sneakers</p>
                            <p>300 $</p>
                        </div>
                        <img className="remove__btn" src="/img/icons/btn-remove.svg" alt="button" />
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul className="">
                        <li >
                            <span>Total:</span>
                            <div></div>
                            <p>600$</p>
                        </li>
                        <li >
                            <span>Tax 5%:</span>
                            <div></div>
                            <p>30$</p>
                        </li>
                    </ul>
                    <a href="#">Place order <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></a>
                </div>

            </div>
        </div>
    )
}
