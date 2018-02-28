export function buildQueryParams(filters) {
    let queryParams = '';
    let loopCount = 0;
    
    for (let key in filters) {
        queryParams += (loopCount > 0) ? '&' : '?';
        queryParams += `${key}=${filters[key]}`;
        loopCount++;
    }

    return queryParams;
}

export function extractIdFromUrl(url) {
    const reg = /\d+(?=\D*$)(?=.*)/g;
    const match = reg.exec(url.substring(0, url.length - 1));
    return parseInt(match[0]);
}