import React from 'react';
import './ProductCard.scss';

type Props = {
    product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
    if (!product) return <></>;
    
    return (
        <div className='grid-card'>
            <span className='grid-card__name'>{product.name}</span>
            <div className='grid-card__description'>
                ID: {product.id}
                <b>{product.cost / 100}₽</b>
            </div>
        </div>
    );
};

export default ProductCard;
