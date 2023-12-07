import React from 'react';
import './ProductsTable.scss';
import Container from '../../../../components/Container/Container';
import TableItem from '../../../../components/TableItem/TableItem';
import { deleteProduct as deleteProductAPI, getAllProducts } from '../../../../API/products';
import AddProductForm from './AddProductForm/AddProductForm';
import Notification from '../../../../components/Notification/Notification';
import ChangeProductForm from './ChangeProductForm/ChangeProductForm';

const ProductsTable = () => {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [createdProducts, setCreatedProducts] = React.useState(0);
    const [notText, setNotText] = React.useState('');
    
    
    React.useEffect(() => {
        getAllProducts()
            .then(res => setProducts(res));
    }, [createdProducts]);

    const deleteProduct = async (item: Product) => {
        try {
            const res = await deleteProductAPI(item);
            if (res === 'OK') return;
            setNotText(res);
        } catch(e) {
            console.log(e);
        }
    };

    return (
        <Container outerClass='product-table__outer' class='product-table'>
            <Notification text={notText} setText={setNotText} />
            <h3>Товары</h3>
            <div className='product-table__table'>
                <TableItem item={{
                    product_id: 'ID заказа',
                    product_cost: 'Цена',
                    product_name: 'Название',
                }} isFirst/>
                {
                    products.map((product, index) => {
                        return (
                            <TableItem 
                                key={product.id}
                                item={product as Record<string, string | number>}
                                isFirst={false}
                                isLast={index === products.length - 1}
                                createdItems={createdProducts}
                                setCreatedItems={setCreatedProducts}
                                deleteFunction={deleteProduct}
                            />
                        );
                    })
                }
            </div>
            <br/>
            <AddProductForm
                setCreatedNewItems={setCreatedProducts}
                createdNewItems={createdProducts}/>
            <br/>
            <ChangeProductForm
                setCreatedNewItems={setCreatedProducts}
                createdNewItems={createdProducts}/>
        </Container >
    );
};

export default ProductsTable;
