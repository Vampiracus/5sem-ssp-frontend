export {};

declare global {

    type Manager = {
        userType: 'manager',
        login: string,
        name: string,
        expirationDate: string,
    }

    type ExistingManager = {
        login: string,
        password: string,
        name: string,
    }
    
    type Client = {
        userType: 'client',
        login: string,
        name: string,
        address: string,
        phone: string,
        expirationDate: string
    }
    
    type ExistingClient = {
        password: string,
        login: string,
        name: string,
        address: string,
        phone: string,
    }
    
    type User = null | Manager | Client

    type Order = {
        id: number
        total: number
        contract: string | null
        contract_date: string | null
        // eslint-disable-next-line max-len
        status: 'Создано' | 'Ожидается создание контракта' | 'Требуются изменения' | 'Ожидается подпись контракта' | 'Выполняется' | 'Отменен' | 'Готов' | 'Выполнен'
        manager_login: null | string
    }

    type OrderItem = {
        id: 'NULL' | number
        product_count: number
        order_id: 'NULL' | number
        product_id: number
        product_name: string
        shipped: number
    }
    
    type ShippedItem = {
        id: number,
        order_id: number,
        shipped: number,
    }

    type Product = {
        id: number,
        cost: number,
        name: string
    }

    type Shipment = {
        id: number,
        shipped_count: number,
        order_item_id: number,
        date: string,
        manager_login: string,
    }
}
