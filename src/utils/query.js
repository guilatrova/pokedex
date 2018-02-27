export default function getQueryParams(filters) {
    let queryParams = '';
    let loopCount = 0;
    
    for (let key in filters) {
        queryParams += (loopCount > 0) ? '&' : '?';
        queryParams += `${key}=${filters[key]}`;
        loopCount++;
    }

    return queryParams;
}