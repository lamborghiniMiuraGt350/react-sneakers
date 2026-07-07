import React, { useState } from 'react';
import axios from 'axios';

import { Info } from '../Info/Info';
import { useCart } from '../../hooks/useCart';

import './drawer.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function Drawer({ onClose, onRemove, oppened, items = [] }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [orderId, setOrderId] = useState(null);
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://6a4845b3abfcbaade1194b1e.mockapi.io/orders', {
                items: cartItems
            });

            setOrderId(data.id)
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`https://6a46f626a268c8be2ce869b2.mockapi.io/cart/${item.id}`);
                await delay(1000);
            }
        } catch (error) {
            alert("Error creating order!");
            console.error(error);
        }
        setIsLoading(false);
    };
    return (
        <div className={`overlay ${oppened ? 'active' : ''}`}>
            <div className='drawer'>
                <h2>Cart <img onClick={onClose} className="remove__btn" width={32} height={32} src="/img/icons/btn-remove.svg" alt="button" /></h2>

                {/* ITEMS OR EMPTY */}
                {items.length > 0 ? (
                    <div className='items-wrapper'>
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
                                    <p>{totalPrice.toFixed(2)} $</p>
                                </li>
                                <li>
                                    <span>Tax 5%:</span>
                                    <div></div>
                                    <p>{(totalPrice * 5 / 100).toFixed(2)} $</p>
                                </li>
                            </ul>
                            <button className='greenBtn' disabled={isLoading} onClick={onClickOrder}>Place order <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg></button>
                        </div>
                    </div>
                ) : (<Info title={isOrderComplete ? 'Order placed!' : 'Cart is empty'}
                    description={isOrderComplete ? `Your order #${orderId} will be handed over to the courier service soon.` : 'Add at least one item to place an order.'}
                    image={isOrderComplete ? "./img/cart/done.png" : "./img/cart/empty.png"} />)}
            </div>
        </div >
    );
}