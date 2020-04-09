import HttpConfig from "../constants/http.config.default";
import { setHeaders, get, post } from "hoolinks/request";
import { UserInfoEntity } from "../model/userInfoEntity";
import {getCookie} from 'hoolinks/cookie';
import { Modal } from "iview";
import { getToken } from "../utils/token";
/**
 * 获取登录用户信息
 */
export function getUserInfoService() {
  let header = setHeaders(
    {url:`${HttpConfig.jat}/login/getCurrentUser`}
  );
  /* const cookie = process.env.NODE_ENV !== 'production'
  ? 'OCD_JSESSIONID=6342a703-c591-4c06-9753-32eebdedf961'
  : getCookie(); */
  const cookie = getCookie();
  let options = {
    'api-cookie': cookie,
    ...header
  }
  return get(`${HttpConfig.gateway}?getCurrentUser`, null, options).then((res) => {
    return new UserInfoEntity(res)
  })
}

