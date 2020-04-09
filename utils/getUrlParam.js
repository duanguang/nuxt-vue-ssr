export function getUrlParam(url, name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const r = url.substr(1).match(reg);
    if (r !== null) return unescape(r[2]);
    return null;
}