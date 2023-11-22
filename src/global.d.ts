export {};

declare global {

    type Manager = {
        userType: 'manager',
        login: string,
        name: string,
        expirationDate: string,
    }
    
    type Client = {
        userType: 'client',
        login: string,
        name: string,
        address: string,
        phone: string,
        expirationDate: string
    }
    
    type User = null | Manager | Client

    type Order = {
        id: number,
        total: number,
        contract: string | null,
        contract_date: string | null,
        status: string
    }

    type OrderItem = {
        id: 'NULL' | number,
        product_count: number,
        order_id: 'NULL' | number,
        product_id: number,
        product_name: string
    }

    type Product = {
        id: number,
        cost: number,
        name: string
    }
}
