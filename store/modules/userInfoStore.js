
import observablePromise from 'hoolinks/observable-promise';
import {PromiseAction} from 'hoolinks/promise-action';
import * as types from '../mutation-type';
import { getUserInfoService } from '../../services/base';

export const UserInfoState = {
  /** 登录用户信息 */
  userInfo: observablePromise()
}
const state = Object.assign({}, UserInfoState);

const mutations = {
  /** 保存登录用户信息到store */
  [types.userInfoTypes.SetUserInfo](state, newState) {
    state.userInfo = newState;
  }
}

const actions = {
  /** 获取登录用户信息 */
  [types.userInfoTypes.GetUserInfo](dispatch, payload){
    let promiseList = getUserInfoService();
    new PromiseAction().set(dispatch, types.userInfoTypes.SetUserInfo, promiseList);
  },
  /** 清空用户信息 */
  [types.userInfoTypes.ClearUserInfo](dispatch, payload){
    new PromiseAction().set(dispatch, types.userInfoTypes.SetUserInfo, observablePromise());
  }
}

export default {
  state,
  actions,
  mutations
}
