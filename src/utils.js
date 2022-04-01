export const sendRequest = async (url, body) => {
    const resp = await fetch(url, {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    })
    return await resp.json();
}