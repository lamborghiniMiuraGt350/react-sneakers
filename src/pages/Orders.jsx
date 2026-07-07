import React, { useEffect, useState } from "react"
import axios from "axios"
import { OrderedCard } from "../components/Card/OrderedCard";

export function Orders() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://6a4845b3abfcbaade1194b1e.mockapi.io/orders').then(data => {
            setOrders(data.data);
            setIsLoading(false);
            // setOrders(data.data.reduce((prev, obj) => [...prev, ...obj.items], []));
        }).catch(error => {
            alert('Error retrieving orders');
            console.error(error);
        })
    }, [])

    return (
        <div className="content">
            <div className="content__inner">
                <h1 className="content__title">My orders</h1>
            </div>
            <div className="cards">
                {/* ORDERS  */}
                {
                    isLoading ? (
                        <div className="order-wrapper" >
                            <div className="cards">
                                {[...Array(4)].map((_, i) => <OrderedCard key={i} loading={true} />)}
                            </div>
                        </div>
                    ) : (
                        orders.map(item => (
                            <div className="order-wrapper" key={item.id}>
                                <h3>Order #{item.id} — {item.items.reduce((a, b) => b.price + a, 0)} $</h3>
                                <div className="cards">
                                    {item.items.map(innerItem => (
                                        <OrderedCard
                                            key={innerItem.id}
                                            id={innerItem.id}
                                            name={innerItem.name}
                                            price={innerItem.price}
                                            image={innerItem.image} />
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
            </div>
        </div >
    )
}