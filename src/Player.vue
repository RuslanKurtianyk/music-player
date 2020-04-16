<template>
  <v-app>
    <v-content>
      <v-container>
        <player-title-bar></player-title-bar>
        <player-controls-bars
          @playtrack="play"
          @pausetrack="pause"
          @stoptrack="stop">
        </player-controls-bars>
        <player-playlist-panel
          :playlist="playlist"
          :selectedTrack="selectedTrack"
          @selecttrack="selectTrack"
          @playtrack="play">
        </player-playlist-panel>
      </v-container>
    </v-content>
  </v-app>
</template>
 
<script>
import PlayerTitleBar from './components/PlayerTitleBar.vue'
import PlayerPlaylistPanel from './components/PlayerPlaylistPanel.vue'
import PlayerControlsBars from './components/PlayerControlsBars.vue'
import { Howl } from 'howler'

  export default {
    components: {
      PlayerTitleBar,
      PlayerPlaylistPanel,
      PlayerControlsBars
    },
    data () {
      return {
        playlist: [
          {title: 'Creeping Death', artist: 'Metallica', howl: null, display: true},
          {title: 'Don\'t Stop The Party', artist: 'Black Eyed Peas', howl: null, display: true},
          {title: 'My Humps', artist: 'Black Eyed Peas', howl: null, display: true},
        ],
        selectedTrack: null,
        index: 0,
        playing: false
      }
    },
    computed: {
       currentTrack () {
        return this.playlist[this.index]
      }
    },
    methods: {
      selectTrack (track) {
        this.selectedTrack = track
      },
      play (index) {
        const selectedTrackIndex = this.playlist.findIndex(track => track === this.selectedTrack)
      
        if (typeof index !== 'number' && this.selectedTrack) {
          if (this.selectedTrack !== this.currentTrack) {
            this.stop()
          }
          index = selectedTrackIndex
        } else {
          index = this.index
        }

        const track = this.playlist[index].howl
      
        if (track.playing()) {
          return
        } 

        track.play()
        
        this.selectedTrack = this.playlist[index]
        this.playing = true
        this.index = index
      },
      pause () {
        this.currentTrack.howl.pause()
        this.playing = false
      },
      stop () {
        this.currentTrack.howl.stop()
        this.playing = false
      }
    },
    created: function() {
      this.playlist.forEach(track => {
        let file = track.title.replace(/\s/g, "_")
        track.howl = new Howl({
          src: [`./playlist/${file}.mp3`]
        })
      })
    }
  }
</script>