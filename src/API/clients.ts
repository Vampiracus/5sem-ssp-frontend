import { getConfig } from './configs';
import { ClientsURL } from './endpoints';

export async function getAllClients(): Promise<Client[]> {
    const res = await fetch(ClientsURL, getConfig);
    try {
        const result = await res.json();
        return result;
    } catch (e) {
        return [];
    }
}
