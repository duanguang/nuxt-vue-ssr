import { post, get, setHeaders } from 'hoolinks/request';
import HttpConfig from '../constants/http.config.default';
import { setToken } from '../utils/token';

/**
 * 注册接口
 * @param {*} params {areaCode, mobile, accountType, smsVCode, loginId, companyName, passWord}
 */
export function registerService(params) {
  return post(HttpConfig.gateway, params, setHeaders({
    url: `${HttpConfig.B2b}/frontapi/official/user/register`
  })).then((res) => {
    if (res.ok) {
      setToken(res.data.sessionId);
    }
    return res;
  })
}

/**
 * 发送手机或邮箱验证码
 * @param {*} params {account, areaCode, accountType}
 */
export function sendVerifyCodeService(params) {
  return post(HttpConfig.gateway, params, setHeaders({
    url: `${HttpConfig.B2b}/frontapi/official/user/sendVerifyCode`
  })).then((res) => {
    return res
  })
}

/**
 * 校验企业名称是否存在
 * @param {*} params {companyName}
 */
export function checkCompanyNameService(params) {
  return post(HttpConfig.gateway, params, setHeaders({
    url: `${HttpConfig.B2b}/frontapi/official/user/checkCompanyName`
  })).then((res) => {
    return res;
  })
}

/**
 * 校验账号、手机、邮箱是否存在
 * @param {*} params {account}
 */
export function checkUserService(params) {
  return post(HttpConfig.gateway, params, setHeaders({
    url: `${HttpConfig.B2b}/frontapi/official/user/checkUser`
  })).then((res) => {
    return res;
  })
}

/**
 * 保存用户了解产品记录
 * @param {*} params {product}
 */
export function saveProductRecord(params) {
  return post(HttpConfig.gateway, params, setHeaders({
    url: `${HttpConfig.B2b}/frontapi/official/user/saveProductRecord`
  })).then((res) => {
    return res;
  })
}
