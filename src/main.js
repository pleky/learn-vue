import Vue from 'vue'
import App from './App.vue'
import VueRouters from 'vue-router'
import routes from './routes'

Vue.config.productionTip = false

// middleware
Vue.use(VueRouters)

// routers
const router = new VueRouters({
  routes: routes,
  mode: 'history'
})

// custom directive
Vue.directive('rainbow', {
  bind(el) {
    // console.log('el', el)
    // console.log('binding',binding)
    // console.log('vnode', vnode)
    el.style.color = `#${Math.random().toString().slice(2,8)}`
  }
})

// create filter
Vue.filter('snipet', (value) => value.slice(0, 100) + "....")

Vue.directive('theme', {
  bind(el, bind) {
    if (bind.arg == 'container' && bind.value == 'grid') {
      el.style.display = 'grid'
      el.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))'
      el.style.gridGap = '8px'
    }
  }
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
