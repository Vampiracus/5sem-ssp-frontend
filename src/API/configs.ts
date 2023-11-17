export const baseConfig: {
    credentials: RequestCredentials,
    mode: RequestMode,
    headers: Record<string, string>
} = {
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
};

export const getConfig = Object.assign({ method: 'get' }, baseConfig);
export const postConfig = Object.assign({ method: 'post' }, baseConfig);

export function withBody(config: Record<string, unknown>, body: string) {
    return Object.assign({ body }, config);
}
