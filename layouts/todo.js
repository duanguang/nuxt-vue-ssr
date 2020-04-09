import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    name: String,
  }
})
export default class TodoJsx extends Vue {
  message={name:'xuxiao is boy',version:'0.0.1'};
  beforeCreate() {
    console.log('组件实例刚被创建，组件属性计算之前，如data');
    console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
    console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
    console.log("%c%s", "color:red", "message: " + this.message)
  }

  created() {
    console.log('created:组件实例创建完成，属性已绑定，但dom还未生成，$el属性不存在');
    console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red", "message: " + this.message.name); //已被初始化
  }

  beforeMount() {
    console.log('beforeMount 模版编译/挂载之前'); //该钩子在服务器端渲染期间不被调用。
    console.log("%c%s", "color:red", "el     : " + (this.$el)); //undefined
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red", "message: " + this.message.name); //已被初始化
  }

  mounted() {
    console.log('mounted:模版编译/挂载之后');
    console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:red", "message: " + this.message.name); //已被初始化
  }

  beforeUpdate() {
    console.log('组件更新之前');
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message.name);
  }

  updated() {
    console.log('组件更新之后');
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message.name);
  }

  beforeDestroy() {
    console.group('beforeDestroy 销毁前状态===============》');
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message.name);
  }
  destroyed() {
    console.group('destroyed 销毁完成状态===============》');
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
    console.log("%c%s", "color:red", "message: " + this.message.name)
  }
  render() {
    return (<div>我是一个Jsx组件,名称:{this.$props.name}</div>)
  }
}