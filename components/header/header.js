import Vue from 'vue';
import Component from 'vue-class-component';
import './header.less';
import {Poptip, Dropdown, DropdownMenu, DropdownItem, Icon} from 'iview';
import productPoptip from './productPoptip/productPoptip';
import searchPoptip from './searchPoptip/searchPoptip'
import * as types from '../../store/mutation-type';
import HttpConfig from '../../constants/http.config.default';
import { logoutService } from '../../services/login';
import { getUrlParam } from '../../utils/getUrlParam'
/* const qq_contact_dark=require('../../static/image/qq_contact_dark.png')
const to_message=require('../../static/image/to-message.png') */
@Component({
  components: {
    productPoptip,
    searchPoptip
  },
  data() {
    return {
      activeKey: 0,
    }
  },
  computed: {
    headerMenuActive() {
      return this.$store.state.appStore.headerMenuActive
    },
    userInfo(){
      const state = this.$store.state.userInfoStore.userInfo
      if (state && state.isResolved) {
        let data = state.data;
        if(data.success){
          let result = data.result || {};
          return result;
        }
      }
      return {};
    }
  }
})
export default class Header extends Vue {
  RegisterHref=`${HttpConfig.jat}/use/toRegister`
  UserCenter=`${HttpConfig.jat}/userCenter`
  mounted() {
    /* if (JSON.stringify(this.userInfo) === '{}') { */
      this.$store.dispatch(types.userInfoTypes.GetUserInfo);
    // }
  }
  /** 退出登录 */
  handleLogout() {
    logoutService().then((res) => {
      if (res.success) {
        this.$store.dispatch(types.userInfoTypes.ClearUserInfo);
        window.location.href=`${HttpConfig.jat}/login/toLogin`
      }
    })
  }
  /** qq咨询 */
  handleQQ() {
    window.open('http://wpd.b.qq.com/page/webchat.html?nameAccount=4009028336', '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
  }
  /** 业务消息 */
  handleToMessage(){
    window.location.href=`${HttpConfig.jat}/message/toMessage`
  }
  render() {
    const { userName } = this.userInfo;
    return (
      <div class="header">
        <div class="h-left">
          <nuxt-link class="logo" to="/"></nuxt-link>
        </div>
        <div class="h-right">
          <ul class="h-menu" mode="horizontal" active-name={this.headerMenuActive}>
            <li class={this.headerMenuActive === '1' ? 'active' : ''}>
              <nuxt-link to="/">首页</nuxt-link>
            </li>
            <li class={this.headerMenuActive === '2' ? 'active' : ''}>
              <productPoptip class="poptipproduct">
                <a target="_blank">产品服务</a>
              </productPoptip>
            </li>
            <li class={this.headerMenuActive === '3' ? 'active' : ''}>
              <searchPoptip>
                <a>查询工具</a>
              </searchPoptip>
            </li>
            <li class={this.headerMenuActive === '4' ? 'active' : ''}>
              <nuxt-link to="/aboutUs">关于我们</nuxt-link>
            </li>
          </ul>
          {/* <div class="qq-concat" onClick={this.handleQQ}>
              <img src={qq_contact_dark}></img>
              <span>在线客服</span>
          </div> */}
          {
            (this.userInfo && JSON.stringify(this.userInfo) !== "{}")
            ?
            <div class="qq-concat to-message" onClick={this.handleToMessage}>
             {/*  <img src={to_message}></img> */}
              <span>业务消息</span>
              {/* <span class="tip-num">99</span> */}
            </div>:null
          }
          {
            (this.userInfo && JSON.stringify(this.userInfo) !== "{}")
            ? <div class="h-login-register">
                <div class="h-login">
                  <a href={this.UserCenter}>{userName}</a>
                </div>
                <div class="h-bar"></div>
                <div class="h-register" onClick={this.handleLogout}>
                  <a>退出</a>
                </div>
              </div>
            : <div class="h-login-register">
                <div class="h-login">
                  <a href={`${HttpConfig.jat}/login/toLogin`}>登录</a>
                </div>
                <div class="h-bar"></div>
                <div class="h-register">
                  <a href={this.RegisterHref}>注册</a>
                </div>
              </div>
            }
        </div>
      </div>
    )
  }
}
