import { setHeaders, get } from "hoolinks/request";
import HttpConfig from "../constants/http.config.default";
import { HsCodeEntity } from "../model/hsCodeEntity";
/**
 * 获取HsCode 
 * @param {*} params {keyword, pageIndex, pageSize}
*/
export function getHsCode(params){
    let header=setHeaders({
        url:`${HttpConfig.jat}/baseData/getHsCode`
    })
    let options={
        ...header
    }
    return get(HttpConfig.gateway,params,options).then((res)=>{
        return new HsCodeEntity(res);
    })
}