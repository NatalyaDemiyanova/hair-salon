import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UIkit from "uikit";
import './styles/styles.scss'
import 'material-design-icons-iconfont'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
// import 'animate.css/animate.min.css';
// import Icons from 'uikit/dist/js/uikit-icons';
// UIkit.use(Icons);

UIkit;

Vue.use(VueGlide)

// Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


