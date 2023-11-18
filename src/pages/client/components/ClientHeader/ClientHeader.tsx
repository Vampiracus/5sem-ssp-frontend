import Button from '../../../../components/Button/Button';
import './ClientHeader.scss';

const ClientHeader = () => {

    return (
        <div className='client-header'>
            <h3>Мои заказы</h3>
            <Button
                className='client-header__add-new-button'
                onClick={() => console.log('create order')}
            >Добавить новый</Button>
        </div>
    );
};

export default ClientHeader;
