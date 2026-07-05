import { useEffect, useState } from 'react';
import './card.scss';

export function Card({ name, price, image, id, onPlus, onFavourite, favorited = false }) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus({ name, price, image, id })
        setIsAdded(!isAdded);
    }
    const onClickFavourite = () => {
        onFavourite({ name, price, image, id });
        setIsFavorite(!isFavorite);
    }

    return (
        <div className="card">
            <div className="favorite" onClick={onClickFavourite}>
                <img src={isFavorite ? '/img/icons/like-end.svg' : '/img/icons/like-start.svg'} alt="" />
            </div>
            <img width={133} height={112} src={image} alt="Sneaker" />
            <h5>{name}</h5>
            <div className="card__bottom">
                <div className="card__info">
                    <p className="card__info-text">Price:</p>
                    <p className="card__info-price">{price} $</p>
                </div>
                <img onClick={onClickPlus}
                    className='plus'
                    width={32} height={32}
                    src={isAdded ? './img/icons/btn-done.svg' : './img/icons/btn-plus.svg'}
                    alt="plus" />
            </div>
        </div>
    );
}
