import { getConfig } from './configs';
import { clientOrdersURL } from './endpoints';

export async function getClientOrders(): Promise<unknown> {
    const res = await fetch(clientOrdersURL, getConfig);
    try {
        const result = await res.json();
        return result;
    } catch (e) {
        return null;
    }
}
