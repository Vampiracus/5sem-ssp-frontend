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
export const patchConfig = Object.assign({ method: 'PATCH' }, baseConfig);
export const deleteConfig = Object.assign({ method: 'delete' }, baseConfig);

export function withBody(config: Record<string, unknown>, body: string) {
    return Object.assign({ body }, config);
}
