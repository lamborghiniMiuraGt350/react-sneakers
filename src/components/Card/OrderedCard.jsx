import React, { useEffect, useState } from 'react';
import ContentLoader from "react-content-loader"
import './card.scss';

export function OrderedCard({ name, price, image, id, loading = false }) {

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
                    <img width='100%' height={135} src={image} alt="Sneaker" />
                    <h5>{name}</h5>
                    <div className="card__bottom">
                        <div className="card__info">
                            <p className="card__info-text">Price:</p>
                            <p className="card__info-price">{price} $</p>
                        </div>
                    </div>
                </>)}
        </div>
    );
}
