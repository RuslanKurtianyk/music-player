<template>
  <v-app>
    <v-content>
      <v-container>
        <player-title-bar></player-title-bar>
      </v-container>
    </v-content>
  </v-app>
</template>
 
<script>
import PlayerTitleBar from './components/PlayerTitleBar.vue'

  export default {
    components: {
      PlayerTitleBar
    },
    data () {
      return {
 
      }
    }
  }
</script>