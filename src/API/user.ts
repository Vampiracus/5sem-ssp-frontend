import { getConfig, postConfig, withBody } from './configs';
import { userURL } from './endpoints';

export async function getCurrentUser(): Promise<User | null> {
    const res = await fetch(userURL, getConfig);
    return res.json();
}

export async function login(url: string, login: string, password: string) {
    const res = await fetch(
        url,
        withBody(postConfig, JSON.stringify({ login, password }))
    );
    return res;
}
