import React from "react"
import { AppContext } from "../../context"

export function Info({ image, title, description }) {
    const { setCartOppened } = React.useContext(AppContext);
    return (
        <div className='cartEmpty'>
            <img src={image} width={120} alt="cart" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="greenBtn" onClick={() => setCartOppened(false)}><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg> Go back</button>
        </div>
    )
}

//Cart is empty
//Add at least one item to place an order.