import { Card } from "../components/Card/Card"

export function Favorites({ items,onAddToFavorite }) {
    return (


        <div className="content">
            <div className="content__inner">
                <h1 className="content__title">My favorites</h1>
            </div>
            <div className="cards">
                {/* CARDS Favorites  */}
                {items
                    .map(item => <Card
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        favorited={true} 
                        onFavourite={onAddToFavorite}/>)}
            </div>
        </div>
    )
}
