import { deleteConfig, getConfig, postConfig, withBody } from './configs';
import {
    baseOrderItemsURL, baseOrderURL, baseOrderItemURL,
    clientOrdersURL, orderItemURL, orderURL 
} from './endpoints';

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
