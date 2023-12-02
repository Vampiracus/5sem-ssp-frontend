import { getConfig, postConfig, withBody } from './configs';
import { ClientsURL } from './endpoints';

export async function getAllClients(): Promise<ExistingClient[]> {
    const res = await fetch(ClientsURL, getConfig);
    try {
        const result = await res.json();
        return result;
    } catch (e) {
        return [];
    }
}

export async function postClient(
    login: string,
    password: string,
    name: string,
    address: string,
    phone: string) {
    const res = await fetch(ClientsURL, withBody(postConfig, JSON.stringify({
        login,
        password,
        name,
        address,
        phone,
    })));
    try {
        const result = await res.text();
        return result;
    } catch (e) {
        return (e as Error).message;
    }
}
