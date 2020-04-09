import { post, setHeaders,get } from "hoolinks/request";
import HttpConfig from "../constants/http.config.default";
import { setToken, removeToken } from "../utils/token";
import { message } from "ant-design-vue";
/**
 *  退出登录
 */
export function logoutService() {
  return get(HttpConfig.gateway, null, setHeaders({
    url: `${HttpConfig.jat}/login/exit`
  })).then((res) => {
   /*  if (res.success) {
      removeToken();
    } */
    return res
  })
}

