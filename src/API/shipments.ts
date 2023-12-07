import { getConfig, postConfig, withBody } from './configs';
import { ShipmentURL } from './endpoints';

export async function getAllShipments(): Promise<Shipment[]> {
    const res = await fetch(ShipmentURL, getConfig);
    try {
        const result = await res.json() as Shipment[];
        return result.map(shipment => {
            const date = (new Date(shipment.date)).toLocaleDateString();
            return { 
                ...shipment,
                date,
            };
        });
    } catch (e) {
        return [];
    }
}


export async function postShipment(
    date: string,
    order_item_id: string,
    shipped_count: string,
    manager_login: string
) {
    const res = await fetch(ShipmentURL, withBody(postConfig, JSON.stringify({
        id: 'NULL',
        date,
        shipped_count,
        order_item_id,
        manager_login,
    })));
    try {
        const result = await res.text();
        return result;
    } catch (e) {
        return '';
    }
}
