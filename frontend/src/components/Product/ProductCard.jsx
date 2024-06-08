import React from 'react';

const ProductCard = ({ productName, description, imageUrl, price }) => {

    return (
        <div className='container'>
            <div className="product_box text-center rounded-[14px] overflow-hidden shadow">
                <h4 className="bursh_text">{productName}</h4>
                <p className="lorem_text">{description}</p>
                <img src={imageUrl} alt={productName} className='w-[100%] object-cover' />
                <div className="btn_main">
                    <div className="buy_bt">
                        <ul className='flex items-center'>
                            <li className="active"><a href="#">Buy Now</a></li>
                            <li><a href="#">Buy Now</a></li>
                        </ul>
                    </div>
                    <h3 className="price_text">Price {price}</h3>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
