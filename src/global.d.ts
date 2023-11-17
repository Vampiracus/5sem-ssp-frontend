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
}
