import Vue from 'vue'
import App from './App.vue'
import router from './router'

//components
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import GalleryPage from './components/GalleryPage.vue'
import ServicesPage from './components/ServicesPage.vue'
import Header from './components/HeaderFooter/Header.vue'
import Footer from './components/HeaderFooter/Footer.vue'
import Aside from './components/Aside.vue'

Vue.component('app-homepage', HomePage);
Vue.component('app-aboutpage', AboutPage);
Vue.component('app-gallery', GalleryPage);
Vue.component('app-services', ServicesPage);

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-aside', Aside);




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
