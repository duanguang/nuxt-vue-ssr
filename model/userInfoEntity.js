import {
  JsonProperty
} from "json-mapper-object";
import {
  BaseEntity
} from './common/baseEntity';


class UserInfo {
  @JsonProperty('applyCompanyType')
  applyCompanyType = ''

  @JsonProperty('channel')
  channel = ''

  @JsonProperty('company')
  company = ''

  @JsonProperty('companyId')
  companyId = ''

  @JsonProperty('createDate')
  createDate = ''

  @JsonProperty('createEndDate')
  createEndDate = ''

  @JsonProperty('createStartDate')
  createStartDate = ''

  @JsonProperty('email')
  email = ''

  @JsonProperty('emailValidate')
  emailValidate = ''

  @JsonProperty('groupId')
  groupId = ''

  @JsonProperty('headImg')
  headImg = ''

  @JsonProperty('id')
  id = ''

  @JsonProperty('isExistPassWord')
  isExistPassWord = ''

  @JsonProperty('keyword')
  keyword = ''

  @JsonProperty('lastRole')
  lastRole = ''

  @JsonProperty('lastRoleId')
  lastRoleId = ''

  @JsonProperty('loginId')
  loginId = ''

  @JsonProperty('mobile')
  mobile = ''

  @JsonProperty('needChangePassword')
  needChangePassword = ''

  @JsonProperty('passWord')
  passWord = ''

  @JsonProperty('platformType')
  platformType = ''

  @JsonProperty('qqHeadImgURL')
  qqHeadImgURL = ''

  @JsonProperty('qqNickName')
  qqNickName = ''

  @JsonProperty('qqOpenId')
  qqOpenId = ''

  @JsonProperty('secRoleVo')
  secRoleVo = ''

  @JsonProperty('sessionId')
  sessionId = ''

  @JsonProperty('sex')
  sex = ''

  @JsonProperty('thplRoleNames')
  thplRoleNames = ''

  @JsonProperty('ucToken')
  ucToken = ''

  @JsonProperty('ucUserUid')
  ucUserUid = ''

  @JsonProperty('userInfo')
  userInfo = ''

  @JsonProperty('validated')
  validated = ''

  @JsonProperty('weCatUserInfo')
  weCatUserInfo = ''

  @JsonProperty('wxHeadImgURL')
  wxHeadImgURL = ''

  @JsonProperty('wxNickName')
  wxNickName = ''

  @JsonProperty('wxUnionI')
  wxUnionI = ''

}

export class UserInfoEntity extends BaseEntity {
  constructor(fromJson) {
    super(fromJson);
    if (fromJson && typeof fromJson === 'object') {
      super.message = fromJson.msg;
      super.success = fromJson.ok || false;
      super.code = fromJson.status || '';
      super.result = super.transformRow(fromJson.data, UserInfo);
    }
  }
}
