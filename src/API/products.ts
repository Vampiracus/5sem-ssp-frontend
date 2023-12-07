import { deleteConfig, getConfig, postConfig, putConfig, withBody } from './configs';
import { BaseProductsURL, ProductsURL } from './endpoints';

export async function getAllProducts(): Promise<Product[]> {
    const res = await fetch(ProductsURL, getConfig);
    try {
        const result = await res.json();
        return result;
    } catch (e) {
        return [];
    }
}

export async function postProduct(name: string, cost: number) {
    const res = await fetch(ProductsURL, withBody(postConfig, JSON.stringify({
        id: 'NULL',
        name,
        cost,
    })));
    try {
        const result = await res.text();
        return result;
    } catch (e) {
        return '';
    }
}

export async function putProduct(id: string, name: string, cost: number) {
    const res = await fetch(ProductsURL, withBody(putConfig, JSON.stringify({
        id,
        name,
        cost,
    })));
    try {
        const result = await res.text();
        return result;
    } catch (e) {
        return '';
    }
}

export async function deleteProduct(item: Product) {
    const res = await fetch(BaseProductsURL + item.id, deleteConfig);
    try {
        const result = await res.text();
        return result;
    } catch (e) {
        return '';
    }
}
