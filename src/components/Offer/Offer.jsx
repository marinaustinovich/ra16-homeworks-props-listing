import React from 'react'
import PropTypes from 'prop-types'

function Offer(props) {
    const { item } = props;

    const processedCurrencyCode = (currency, price) => {
        if (currency === "USD") {
            return `$${price}`;
        }
        
        if (item.currency_code === "EUR") {
            return `€${price}`;
        }
            return `${price} ${currency}`;
    }

    const processedQuantityLevel = (quantity) => {
        if (quantity <= 10) {
            return "level-low";
        }
        
        if (quantity <= 20) {
            return "level-medium";
        } 

        return "level-high";
    }

    return (
        <div className="item" id={item.listing_id}>
                <div className="item-image">
                    <a href={item.url}>
                        <img src={item.MainImage} alt={item.title }/>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{item.title}</p>
                    <p className="item-price">{processedCurrencyCode(item.currency_code, item.price)}</p>
                    <p className={`item-quantity ${processedQuantityLevel(item.quantity)}`}>{item.quantity} left</p>
                </div>
        </div>
    )
}

Offer.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        currency_code: PropTypes.string,
        price: PropTypes.string,
        url: PropTypes.string,
        listing_id: PropTypes.number,
        quantity: PropTypes.number,
        MainImage: PropTypes.string,
    }).isRequired,
}

export default Offer
