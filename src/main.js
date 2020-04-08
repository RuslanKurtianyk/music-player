import Vue from 'vue'
import 'vuetify/dist/vuetify.css'
import Player from './Player.vue'
import vuetify from './plugins/vuetify';

new Vue({
  el: '#app',
  vuetify,
  render: h => h(Player)
})