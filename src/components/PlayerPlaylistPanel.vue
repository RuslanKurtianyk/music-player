<template>
  <v-card height="330" :class="{playlist}">
    <v-list>
      <v-list-item
        v-for="(track, index) in playlist"
        :key="track.title"
        v-show="track.display"
        :class="[{selected: track === selectedTrack}, {even: index % 2 == 0}]"
        @dblclick="playTrack()">
        <v-list-item-content @click="selectTrack(track)">
          <v-list-item-title>{{ index | numbers }} {{ track.artist }} - {{ track.title }}</v-list-item-title>
        </v-list-item-content>
        <v-spacer></v-spacer>
        {{ track.howl.duration() | minutes }}
      </v-list-item>
    </v-list>
  </v-card>
</template>
 
<script>
  export default {
    props: {
      playlist: Array,
      selectedTrack: Object
    },
    methods: {
      selectTrack (track) {
        this.$emit('selecttrack', track)
      },
      playTrack(index) {
        this.$emit('playtrack', index)
      }
    }
  }
</script>

<style scoped>
  .selected {
    background-color:  orange !important;
  }
  .even {
    background-color: #505050
  }
  .playlist {
    overflow: auto
  }
</style>