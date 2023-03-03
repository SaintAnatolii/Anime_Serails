export const getData = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        return new Error(`Ошибка запроса по адресу: ${url}`);
    } else {
        return response.json();
    }
};