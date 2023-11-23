import { getConfig, postConfig, withBody } from './configs';
import { ManagersURL } from './endpoints';

export async function getAllManagers(): Promise<ExistingManager[]> {
    const res = await fetch(ManagersURL, getConfig);
    try {
        const result = await res.json();
        return result;
    } catch (e) {
        return [];
    }
}

export async function postManager(login: string, password: string, name: string) {
    const res = await fetch(ManagersURL, withBody(postConfig, JSON.stringify({
        login,
        password,
        name,
    })));
    try {
        const result = await res.text();
        return result;
    } catch (e) {
        return '';
    }
}
