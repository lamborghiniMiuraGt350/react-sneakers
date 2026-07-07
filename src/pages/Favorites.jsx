import React from "react"
import { Card } from "../components/Card/Card"
import { AppContext } from "../context";

export function Favorites() {
    const { favorites, onAddToFavorite, onAddToCart } = React.useContext(AppContext);


    return (
        <div className="content">
            <div className="content__inner">
                <h1 className="content__title">My favorites</h1>
            </div>
            <div className="cards">
                {/* CARDS Favorites  */}
                {favorites
                    .map(item => <Card
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        favorited={true}
                        onPlus={(obj) => onAddToCart(obj)}
                        onFavourite={onAddToFavorite} />)}
            </div>
        </div>
    )
}
