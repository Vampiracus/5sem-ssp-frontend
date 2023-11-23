import { deleteConfig, getConfig, patchConfig, postConfig, withBody } from './configs';
import {
    baseOrderItemsURL, baseOrderURL, baseOrderItemURL,
    clientOrdersURL, orderItemURL, orderURL, baseSendOrderURL,
    baseSetOrderHasContractURL, baseOrderSignedURL, baseRejectOrderURL, baseOrderReadyURL 
} from './endpoints';

export async function getAllOrders(): Promise<Order[]> {
    const res = await fetch(orderURL, getConfig);
    try {
        let result: Order[] = await res.json();
        result = result.filter(o => o.status !== 'created');
        return result;
    } catch (e) {
        return [];
    }
}

export async function getClientOrders(): Promise<Order[]> {
    const res = await fetch(clientOrdersURL, getConfig);
    try {
        const result = await res.json();
        return result;
    } catch (e) {
        return [];
    }
}

export async function getOrderItems(orderId: number): Promise<OrderItem[]> {
    const res = await fetch(baseOrderItemsURL + orderId, getConfig);
    try {
        const result = await res.json();
        return result;
    } catch (e) {
        return [];
    }
}

export async function postOrderItem(orderId: number, productId: number, productCount: number) {
    const res = await fetch(orderItemURL, withBody(postConfig, JSON.stringify({
        id: 'NULL',
        product_count: productCount,
        product_id: productId,
        order_id: orderId,
    })));
    try {
        const result = await res.text();
        return result;
    } catch (e) {
        return '';
    }
}

export async function deleteOrderItem(item: OrderItem) {
    const res = await fetch(baseOrderItemURL + item.id, deleteConfig);
    try {
        const result = await res.text();
        return result;
    } catch (e) {
        return '';
    }
}

export async function postOrder(login: string) {
    const res = await fetch(orderURL, withBody(postConfig, JSON.stringify({
        id: 'NULL',
        total: 0,
        contract: 'NULL',
        contract_date: 'NULL',
        status: 'created',
        client_login: login,
    })));
    try {
        const result = await res.text();
        return result;
    } catch (e) {
        return '';
    }
}

export async function deleteOrder(order: Order) {
    const res = await fetch(baseOrderURL + order.id, deleteConfig);
    try {
        const result = await res.text();
        return result;
    } catch (e) {
        return '';
    }
}

export async function sendOrder(order_id: number) {
    const res = await fetch(baseSendOrderURL + order_id, patchConfig);
    try {
        const result = await res.text();
        return result;
    } catch (e) {
        return '';
    }
}

export async function setContractIsSigned(order_id: number) {
    const res = await fetch(baseOrderSignedURL + order_id, patchConfig);
    try {
        const result = await res.text();
        return result;
    } catch (e) {
        return '';
    }
}

export async function setOrderIsReady(order_id: number) {
    const res = await fetch(baseOrderReadyURL + order_id, patchConfig);
    try {
        const result = await res.text();
        return result;
    } catch (e) {
        return '';
    }
}

export async function sendOrderContract(order_id: number, contract: string, date: string) {
    const year = Number(date.slice(6, 10));
    const month = Number(date.slice(3, 5)) - 1;
    const day = Number(date.slice(0, 2));
    let contract_date: Date | number = (new Date(Date.UTC(year, month, day)));
    contract_date = Number(contract_date);

    const res = await fetch(baseSetOrderHasContractURL + order_id,
        withBody(patchConfig, JSON.stringify({
            contract,
            contract_date,
        })));
    try {
        const result = await res.text();
        return result;
    } catch (e) {
        return '';
    }
}

export async function rejectOrder(order_id: number) {
    const res = await fetch(baseRejectOrderURL + order_id, patchConfig);
    try {
        const result = await res.text();
        return result;
    } catch (e) {
        return '';
    }
}
