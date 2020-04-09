import Vue from 'vue';
import Component from 'vue-class-component';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
@Component
export default class Layout extends Vue {
  render(){
    return(
      <div>
        <Header></Header>
        <nuxt></nuxt>
        <Footer></Footer>
      </div>
    )
  }
}
