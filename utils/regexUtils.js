
/* jshint esversion: 6 */
import {
    RegexEnum
} from './regexEnum'; // 正则规则枚举

// 公共工具类
export const CommonUtils ={
  /**
   * 判断字符串是否为空
   * @param {String} v 判断的值
   * @returns {Boolean} 是否通过
   */
  isEmptyOrNull(v) { return typeof (v) === 'undefined' || v === '' || v == null ? true : false; },
  /**
   * 判断是否为数组
   * @param {String} v 判断的值
   * @returns {Boolean} 是否通过
   */
  isArray(v) { return Object.prototype.toString.call(v) === '[object Array]'; },
  /**
   * 正则统一验证函数
   * @param (regex : regex) 正则规则
   * @param (value : Objext) 值
   * @return {Boolean}
   */
  regValidator(regx, value) {
    if (CommonUtils.isEmptyOrNull(regx) || CommonUtils.isEmptyOrNull(value) || CommonUtils.isArray(value)) {
      // throw new Error('参数有误...');
      return false;
    }
    return regx.test(value);
  },
}

// 正则工具类
export const RegexUtils = {
    /**
     * 账户格式
     * @param {String} v 验证的值
     * @returns {Boolean} 验证是否通过
     */
    accountFormat(v) {
        return CommonUtils.regValidator(RegexEnum.ISACCOUNT, v);
    },
    /**
     * 手机格式
     * @param {String} v 验证的值
     * @returns {Boolean} 验证是否通过
     */
    phoneFormat(v) { return CommonUtils.regValidator(RegexEnum.ISMOBILE, v); },
    /**
     * 香港手机格式
     * @param {String} v 验证的值
     * @returns {Boolean} 验证是否通过
     */
    phoneHKFormat(v) { return CommonUtils.regValidator(RegexEnum.ISHKMOBILE, v); },
    /**
     * 座机格式
     * @param {String} v 验证的值
     * @returns {Boolean} 验证是否通过
     */
    TelFormat(v) { return CommonUtils.regValidator(RegexEnum.TELPHONE, v); },
    /**
     * 邮箱格式
     * @param {String} v 验证的值
     * @returns {Boolean} 验证是否通过
     */
    email(v) { return CommonUtils.regValidator(RegexEnum.EMAIL, v); },
    /**
     * 用户名格式
     * @param {String} v 验证的值
     * @returns {Boolean} 验证是否通过
     */
    userName(v) {
        //非全数字，全字母，非全下划线
        if(!CommonUtils.regValidator(RegexEnum.ONLYNUMBER, v)
          &&!CommonUtils.regValidator(RegexEnum.ONLYUNDERLINE, v)
          &&!CommonUtils.regValidator(RegexEnum.ONLYLETTER, v)
          &&CommonUtils.regValidator(RegexEnum.USERNAME2, v)
          ){
          return true
        }
        return false
        // return CommonUtils.regValidator(RegexEnum.USERNAME, v);
      },
    /**
     * 名称格式
     * @param {String} v 验证的值
     * @returns {Boolean} 验证是否通过
     */
    isName(v) { return CommonUtils.regValidator(RegexEnum.NAME, v); },
    /**
     * 检测密码格式
     * @param {String} v 验证的值
     * @returns {Boolean} 验证是否通过
     */
    passWord(v) {
      //非全数字，全字母
      if(!CommonUtils.regValidator(RegexEnum.ONLYNUMBER, v)&&!CommonUtils.regValidator(RegexEnum.ONLYLETTER, v)&&CommonUtils.regValidator(RegexEnum.ISPWD, v)){
        return true
      }
      return false
    },
    isPassword(v) { return CommonUtils.regValidator(RegexEnum.ISPWD, v); },
    /**
     * 是否为数字
     * @param {String} v 验证的值
     * @returns {Boolean} 验证是否通过
     */
    isNumber(v) { return CommonUtils.regValidator(RegexEnum.NUMBER, v); },
    /**
     * 弱密码格式
     * @param {String} v 验证的值
     * @returns {Boolean} 验证是否通过
     */
    lowLevel(v) { return CommonUtils.regValidator(RegexEnum.LOWPWD, v); },
    /**
     * 强密码格式
     * @param {String} v 验证的值
     * @returns {Boolean} 验证是否通过
     */
    highLevel(v) { return CommonUtils.regValidator(RegexEnum.HIGHPWD, v); },
    /**
     * Mileage
     * @param {String} v 验证的值
     * @returns {Boolean} 验证是否通过
     */
    isMileage(v) { return CommonUtils.regValidator(RegexEnum.MILEAGE, v); },
    /**
     * COST
     * @param {String} v 验证的值
     * @returns {Boolean} 验证是否通过
     */
    isCost(v) { return CommonUtils.regValidator(RegexEnum.COST, v); },
    /**
     * setError COST
     * @param {String} v 验证的值
     * @returns {Boolean} 验证是否通过
     */
    isErrorCost(v) { return CommonUtils.regValidator(RegexEnum.ERRORCOST, v); },
    /**
     * 匹配url地址
     * @param {String} v 验证的值
     * @returns {Boolean} 验证是否通过
     */
    isUrl(v) { return CommonUtils.regValidator(RegexEnum.URL, v); },

    /**匹配身份证号**/
    isId(v) {
      return (CommonUtils.regValidator(RegexEnum.IDNUMBER, v));
      // return (CommonUtils.regValidator(RegexEnum.IDNUMBER1, v) || CommonUtils.regValidator(RegexEnum.IDNUMBER2, v));
    },
};
