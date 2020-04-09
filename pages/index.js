import Vue from 'vue';
import Component from 'vue-class-component';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import * as types from '../store/mutation-type'
@Component({
})
export default class PageFirst extends Vue {
  mounted(){
    this.$store.commit(types.appTypes.ChangeHeaderMenuActive, '1');
  }
  render() {
    return (
      <div>
        <Header></Header>
        
        <Footer></Footer>
      </div>
    )
  }
}