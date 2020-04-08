import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import Player from './Player.vue'
import vuetify from './plugins/vuetify';

Vue.use(Vuetify)

new Vue({
  el: '#app',
  vuetify,
  render: h => h(Player)
})