import Vue from 'vue';
import {Row,Col} from 'iview';
import './footer.less';
import Component from 'vue-class-component';
/* const hoolinksJAT=require('../../static/image/hoolinksJAT.png') */
@Component({})
export default class Footer extends Vue {
  render() {
    return (
      <div class="footer">
        <Row style={{width:'100%'}}>
          <Col span={20} class="f-text">
            <div>
              <span>电话: 020-82211102</span>
              <span class="f-bar"></span>
              <span>邮箱: service@hoolinks.com</span>
              <span class="f-bar"></span>
              <span>客服热线: 400-902-8336</span>
            </div>
            <div>地址: 广州市保税区保盈大道19号</div>
            <div class="copy-right">© Copyright 2017-2020 在线报关 粤ICP备16076586号-1 版权所有 著作权与商标声明 粤公网安备：44011202000240号</div>
          </Col>
          <Col span={4} class="f-img">
            {/* <img src={hoolinksJAT}></img> */}
            <div>扫一扫联系我们</div>
          </Col>
        </Row>
      </div>
    )
  }
}
