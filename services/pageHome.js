import { setHeaders,post,get } from "hoolinks/request";
import HttpConfig from "../constants/http.config.default";
/** 获取码头/机场  */
export function getFreightYard(params){
    let header=setHeaders({
        url:`${HttpConfig.jat}/use/serachFreightYard`
    })
    let options={
        contentType:'application/x-www-form-urlencoded',
        ...header
    }
    return post(HttpConfig.gateway,params,options).then((res)=>{
        return res;
    })
}
/** 获取离境口岸 */
export function getEntryDeparturePortPage(params){
    let header=setHeaders({
        url:`${HttpConfig.jat}/baseData/getEntryDeparturePortPage`
    })
    let options={
        contentType:'application/json',
        ...header
    }
    return post(HttpConfig.gateway,params,options).then((res)=>{
        return res;
    })
}
/* 获取地区报关地数据 /use/getBillPlace */
export function getBillPlace(){
    let header=setHeaders({
        url:`${HttpConfig.jat}/use/getBillPlace`
    })
    let options={
        ...header
    }
    return post(HttpConfig.gateway,{},options).then((res)=>{
        return res;
    })
}
/** 获取地区城市数据  */
export function getAddressArea(param){
    let header=setHeaders({
        url:`${HttpConfig.jat}/getAddressArea`
    })
    let options={
        contentType:'application/x-www-form-urlencoded',
        ...header
    }
    return post(HttpConfig.gateway,param,options).then((res)=>{
        return res;
    })
}
/* 获取街道数据 */
export function getStreets(param){
    let header=setHeaders({
        url:`${HttpConfig.jat}/getStreets`
    })
    let options={
        contentType:'application/x-www-form-urlencoded',
        ...header
    }
    return post(HttpConfig.gateway,param,options).then((res)=>{
        return res;
    })
}
/* 获取街道数据 */
export function getBannerList(){
  let header=setHeaders({
      url:`${HttpConfig.jat}/banner/findPage`
  })
  let options={
      ...header
  }
  return post(HttpConfig.gateway,{},options).then((res)=>{
      if (res && res.success && res.data && res.data.result) {
        return res.data.result.sort((a,b) => a.picOrder - b.picOrder).map((item) => item.picUrl)
      }
      return [];
  })
}
/**
 *  获取消息推送脚步
 */
export function getMessagepushScript() {
  return get(HttpConfig.gateway, null, setHeaders({
    url: HttpConfig.messagepushUrl,
    'Content-Type': 'text/html'
  })).then((res) => {
    return res
  })
}
