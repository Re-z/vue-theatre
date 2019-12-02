import Vue from 'vue'
import App from './App.vue'
//router
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import { routes } from './assets/js/routes.js'

//components
import HomePage from './components/layouts/HomePage.vue'
import InnerPage from './components/layouts/InnerPage.vue'
import AboutPage from './components/AboutPage.vue'
import GalleryPage from './components/GalleryPage.vue'
import ServicesPage from './components/ServicesPage.vue'
import ContactsPage from './components/ContactsPage.vue'
import RepertoryPage from './components/RepertoryPage.vue'
import Header from './components/HeaderFooter/Header.vue'
import Footer from './components/HeaderFooter/Footer.vue'
import Aside from './components/Aside.vue'
import Heading from './components/Heading.vue'


import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)
import LightBox from 'vue-image-lightbox'
Vue.component('LightBox', LightBox);


Vue.component('app-homepage', HomePage);
Vue.component('app-innerpage', InnerPage);
Vue.component('app-aboutpage', AboutPage);
Vue.component('app-gallery', GalleryPage);
Vue.component('app-services', ServicesPage);
Vue.component('app-contacts', ContactsPage);
Vue.component('app-repertory', RepertoryPage);

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-aside', Aside);
Vue.component('app-heading', Heading);




const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
      if(savedPosition){
          return savedPosition
      }
      if(to.hash){
          return { selector: to.hash }
      }
      return {
          x:0,
          y:0
      }
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
});




new Vue({
  el:'#app',
  router,
  render: h => h(App)
});

