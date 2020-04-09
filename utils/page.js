import Component from 'vue-class-component';
import Vue from 'vue';
import {Spin,Icon} from 'iview'
import  invariant from "invariant";

@Component
export class PageLoadingBase extends Vue {
    options=null;
    constructor(options){
        super(options);
        this.options=options||{};
    }
    pageInit(options){
        this.options=options||{};
        invariant(this.$store.state[this.options.modules], 'modules: not find modules in store.state');
        invariant(this.$store.state[this.options.modules][this.options.state], 'state: not find state in store.state');
        let name=`$store.state.${this.options.modules}.${this.options.state}`
        this.$watch(name, {
            deep: true,
            handler: function(val, oldVal) {
                if(val&&val.isPending){
                    Spin.show({
                        render: (h) => {
                            return h('div', [
                                h(Icon, {
                                    'class': 'demo-spin-icon-load',
                                    props: {
                                        type: 'load-c',
                                        size: 18
                                    }
                                }),
                                h('div', 'Loading')
                            ])
                        }
                    });
                }
                else{
                    Spin.hide();
                }
            }
        });
    }
    render(){
        return null
    }
}
export function page(options) {
    return function (Components) {
        class page extends Components {     
            constructor() {
                super();
            }
            created(){
                options=options||{};
                invariant(this.$store.state[options.modules], 'modules: not find modules in store.state');
                invariant(this.$store.state[options.modules][options.state], 'state: not find state in store.state');
                let name=`$store.state.${options.modules}.${options.state}`
                this.$watch(name, {
                    deep: true,
                    handler: function(val, oldVal) {
                        if(val&&val.isPending){
                            Spin.show({
                                render: (h) => {
                                    return h('div', [
                                        h(Icon, {
                                            'class': 'demo-spin-icon-load',
                                            props: {
                                                type: 'load-c',
                                                size: 18
                                            }
                                        }),
                                        h('div', '玩命加载中...')
                                    ])
                                }
                            });
                        }
                        else{
                            Spin.hide();
                        }
                    }
                });
                
            }
            mounted () {
                this.mounted&&this.mounted();
            }
            render(h) {              
                return (super.render(h))
            }
        }
        return page
    };
}