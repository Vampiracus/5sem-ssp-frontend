import React, { useEffect } from 'react';
import Container from '../../components/Container/Container';
import { getAllProducts } from '../../API/products';
import './ProductsPage.scss';
import ProductCard from './ProductCard/ProductCard';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
    const [products, setProducts] = React.useState<Product[]>([]);
    
    useEffect(() => {
        getAllProducts()
            .then(setProducts);
    }, []);

    return (
        <Container>
            <h3>Наши товары</h3>
            <Link to='/'>
                <span className='span-link'>На главную</span>
            </Link>
            <br />
            <br />
            <div className='products-grid'>
                {products.map(product => <ProductCard product={product} key={product.id} />)}
            </div>
        </Container>
    );
};

export default ProductsPage;
