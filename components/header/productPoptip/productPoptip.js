import Vue from 'vue';
import Component from 'vue-class-component';
import {Poptip} from "iview";
import './productPoptip.less';

@Component({})
export default class productPoptip extends Vue {
  render() {
    return (
      <Poptip
        placement="bottom"
        width="600"
        trigger="hover"
      >
        <div class="poptip-tag">
          {this.$slots.default[0]}
        </div>
        <div class="poptip-content" slot="content">
          <div class="p-left">
            <div class="p-title">产品</div>
            <ul class="p-list">
              <li style={{height:'100px'}}>
                <p class="p-sub-title"><nuxt-link to="/product/customs" target="_blank">报关</nuxt-link></p>
                <p><nuxt-link to="/product/customs" target="_blank">在线报关</nuxt-link></p>
                <p><nuxt-link to="/product/customs" target="_blank">口岸协同</nuxt-link></p>
              </li>
              <li>
                <p class="p-sub-title"><nuxt-link target="_blank" to="/product/trailer">拖车</nuxt-link></p>
                <p><nuxt-link target="_blank" to="/product/trailer">车队运力</nuxt-link></p>
              </li>
              <li>
                <p class="p-sub-title"><nuxt-link to="/product/manifest" target="_blank">舱单</nuxt-link></p>
                <p><nuxt-link to="/product/manifest?manifestType=1" target="_blank">公路舱单</nuxt-link></p>
                <p><nuxt-link to="/product/manifest?manifestType=0" target="_blank">海运舱单</nuxt-link></p>
              </li>
            </ul>
          </div>
          <div class="p-right">
            <div class="p-title">专属服务</div>
            <ul class="p-list">
              <li>
                <p class="p-sub-title"><nuxt-link target="_blank" to="/product/union?unionType=2">跨境电商</nuxt-link></p>
                <p><nuxt-link target="_blank" to="/product/union?unionType=2">供应链一体化</nuxt-link></p>
                <p><nuxt-link target="_blank" to="/product/union?unionType=2">保税电商BBC仓配</nuxt-link></p>
                <p><nuxt-link target="_blank" to="/product/union?unionType=2">BC/CC清关</nuxt-link></p>
                <p><nuxt-link target="_blank" to="/product/union?unionType=2">线上线下增值服务</nuxt-link></p>
              </li>
              <li>
                <p class="p-sub-title"><nuxt-link target="_blank" to="/product/union?unionType=1">进口快销</nuxt-link></p>
                <p><nuxt-link target="_blank" to="/product/union?unionType=1">供应链金融</nuxt-link></p>
                <p><nuxt-link target="_blank" to="/product/union?unionType=1">国际代采</nuxt-link></p>
                <p><nuxt-link target="_blank" to="/product/union?unionType=1">食品准入咨询</nuxt-link></p>
              </li>
              <li>
                <p class="p-sub-title"><nuxt-link target="_blank" to="/product/union">全国通关联盟</nuxt-link></p>
                <p><nuxt-link target="_blank" to="/product/union">解决异地通关难题</nuxt-link></p>
              </li>
              <li>
                <p class="p-sub-title"><nuxt-link target="_blank" to="/product/service">咨询服务</nuxt-link></p>
                <p><nuxt-link target="_blank" to="/product/service?consulType=1">预归类</nuxt-link></p>
                <p><nuxt-link target="_blank" to="/product/service?consulType=2">培训</nuxt-link></p>
                <p><nuxt-link target="_blank" to="/product/service?consulType=3">AEO</nuxt-link></p>
                <p><nuxt-link target="_blank" to="/product/service?consulType=4">关税筹划</nuxt-link></p>
                <p><nuxt-link target="_blank" to="/product/service?consulType=5">海关稽查辅导</nuxt-link></p>
              </li>
              <li style={{marginTop:'-59px'}}>
                <p class="p-sub-title"><nuxt-link target="_blank" to="/product/link">昊链知识服务</nuxt-link></p>
                <p><nuxt-link target="_blank" to="/product/link">知识服务平台</nuxt-link></p>
              </li>
            </ul>
          </div>
        </div>
      </Poptip>
    )
  }
}
