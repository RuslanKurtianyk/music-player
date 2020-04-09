import Vue from 'vue'
import 'vuetify/dist/vuetify.css'
import vuetify from './plugins/vuetify'
import Player from './Player.vue'
import './utils/filters'

new Vue({
  el: '#app',
  vuetify,
  render: h => h(Player)
})