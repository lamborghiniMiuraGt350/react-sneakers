import React, { useState } from 'react';
import ContentLoader from "react-content-loader"
import './card.scss';
import { AppContext } from '../../context';

export function Card({ name, price, image, id, parentId, onPlus, onFavourite, favorited = false, loading = false }) {
    // const [isAdded, setIsAdded] = useState(added);
    const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus({ name, price, image, id, parentId: id })
    }
    const onClickFavourite = () => {
        onFavourite({ name, price, image, id, parentId: id });
        setIsFavorite(!isFavorite);
    }
    return (
        <div className="card">
            {loading ? (<ContentLoader
                speed={2}
                width={150}
                height={225}
                viewBox="0 0 150 289"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="10" ry="10" width="150" height="115" />
                <rect x="0" y="131" rx="3" ry="3" width="150" height="15" />
                <rect x="0" y="150" rx="3" ry="3" width="93" height="15" />
                <rect x="0" y="187" rx="8" ry="8" width="80" height="24" />
                <rect x="118" y="179" rx="8" ry="8" width="32" height="32" />
            </ContentLoader>) : (
                <>
                    <div className="favorite" onClick={onClickFavourite}>
                        <img src={isFavorite ? `${process.env.PUBLIC_URL}/img/icons/like-end.svg` : `${process.env.PUBLIC_URL}/img/icons/like-start.svg`} alt="" />
                    </div>
                    <img width='100%' height={135} src={`${process.env.PUBLIC_URL}/${image}`} alt="Sneaker" />
                    <h5>{name}</h5>
                    <div className="card__bottom">
                        <div className="card__info">
                            <p className="card__info-text">Price:</p>
                            <p className="card__info-price">{price} $</p>
                        </div>
                        <img onClick={onClickPlus}
                            className='plus'
                            width={32} height={32}
                            src={isItemAdded(id) ? `${process.env.PUBLIC_URL}/img/icons/btn-done.svg` : `${process.env.PUBLIC_URL}/img/icons/btn-plus.svg`}
                            alt="plus" />
                    </div>
                </>)}
        </div>
    );
}

