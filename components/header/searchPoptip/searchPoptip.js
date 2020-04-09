import Component from "vue-class-component";
import Vue from "vue";
import {Poptip} from "iview";
import './searchPoptip.less'
const SearchUtilList=[
  {
    searchTitle:'HS Code',
    routerUrl:'/searchUtils/hscode'
  },
  {
    searchTitle:'知识产权备案查询',
    routerUrl:'http://www.haiguanbeian.com'
  },
  {
    searchTitle:'码头查询',
    routerUrl:'/searchUtils/pier'
  },
  {
    searchTitle:'货物查询',
    routerUrl:'/searchUtils/goods'
  },
  {
    searchTitle:'VGM查询',
    routerUrl:'/searchUtils/vgm'
  },
  {
    searchTitle:'船期查询',
    routerUrl:'http://www.chinaports.com/chuanqibiao/1/null/null/null/query'
  },
  {
    searchTitle:'海关总署',
    routerUrl:'http://www.customs.gov.cn/'
  },
  {
    searchTitle:'单一窗口',
    routerUrl:'https://www.singlewindow.cn/'
  },
]
@Component({})
export default class searchPoptip extends Vue{
    render(){
        return(
            <Poptip
                placement="bottom"
                width="190"
                trigger="hover"
              >
                <div>
                  {this.$slots.default[0]}
                </div>
                <div slot="content" class="s-poptip">
                    <div class="s-list">
                      {
                        SearchUtilList.map((serachUtil,index)=>{
                          return  [1,5,6,7].includes(index)?<p><a target="_blank" href={serachUtil.routerUrl}>{serachUtil.searchTitle}</a></p>:<p><nuxt-link target="_blank" to={serachUtil.routerUrl}>{serachUtil.searchTitle}</nuxt-link></p>
                        })
                      }
                    </div>
                </div>
            </Poptip>
        )
    }
}
