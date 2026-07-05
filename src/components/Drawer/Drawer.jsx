import './drawer.scss';

export function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Cart <img onClick={onClose} className="remove__btn" width={32} height={32} src="/img/icons/btn-remove.svg" alt="button" /></h2>

                {/* ITEMS OR EMPTY */}
                {items.length > 0 ? (
                    <>
                        <div className="items">
                            {items.map((item) => (
                                <div className="cart__item" key={item.id}>
                                    <div style={{ backgroundImage: `url(${item.image})` }} className="cart-item-img"></div>
                                    <div className="cart__info">
                                        <p>{item.name}</p>
                                        <p>{item.price} $</p>
                                    </div>
                                    <img onClick={() => onRemove(item.id)} className="remove__btn" src="/img/icons/btn-remove.svg" alt="button" />
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Total:</span>
                                    <div></div>
                                    <p>600$</p>
                                </li>
                                <li>
                                    <span>Tax 5%:</span>
                                    <div></div>
                                    <p>30$</p>
                                </li>
                            </ul>
                            <button>Place order <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg></button>
                        </div>
                    </>
                ) : (
                    <div className='cartEmpty'>
                        <img src="./img/cart/empty.png" width={120} height={120} alt="cart" />
                        <h2>Cart is empty</h2>
                        <p>Add at least one item to place an order.</p>
                        <button onClick={onClose}><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> Go back</button>
                    </div>
                )}
            </div>
        </div >
    );
}