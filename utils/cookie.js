/**
 *设置cookie值
 *
 * @export
 * @param {*} name
 * @param {*} value
 * @param {*} iDay 有效期 数字
 */
export function setCookie(name, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + '=' + value + ';expires=' + oDate;
}
/**
 *获取cookie值
 *
 * @export
 * @param {*} name
 * @returns
 */
export function getCookie(name) {
    if (name) {
        var arr = document.cookie.split('; ');
        for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('=');
            if (arr2[0] == name) {
                return arr2[1];
            }
        }
    }

    return '';
}
/**
 *移除cookie
 *
 * @export
 * @param {*} name
 */
export function removeCookie(name) {
    setCookie(name, 1, -1);
}
/**
 *清空
 *
 * @export
 */
export function clearAllCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;) {
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
        }
    }
}
