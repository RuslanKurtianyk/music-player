<template>
  <v-app>
    <v-content>
      <v-container>
        <player-title-bar></player-title-bar>
        <player-playlist-panel
          :playlist="playlist"
          :selectedTrack="selectedTrack"
          @selecttrack="selectTrack">
        </player-playlist-panel>
      </v-container>
    </v-content>
  </v-app>
</template>
 
<script>
import PlayerTitleBar from './components/PlayerTitleBar.vue'
import PlayerPlaylistPanel from './components/PlayerPlaylistPanel.vue'
import { Howl } from 'howler'

  export default {
    components: {
      PlayerTitleBar,
      PlayerPlaylistPanel
    },
    data () {
      return {
        playlist: [
          {title: 'Creeping Death', artist: 'Metallica', howl: null, display: true},
          {title: 'Don\'t Stop The Party', artist: 'Black Eyed Peas', howl: null, display: true},
          {title: 'My Humps', artist: 'Black Eyed Peas', howl: null, display: true},
        ],
        selectedTrack: null
      }
    },
    methods: {
      selectTrack (track) {
        this.selectedTrack = track
      }
    },
    created: function() {
      this.playlist.forEach(track => {
        let file = track.title.replace(/\s/g, "_")
        track.howl = new Howl({
          src: [`./playlist/${file}.mp3`]
        })
        // eslint-disable-next-line no-console
        console.log(track.howl);
      })
    }
  }
</script>