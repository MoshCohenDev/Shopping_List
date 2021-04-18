<template>
  <div id="q-app" class="bg-light-blue-1">
    <router-view/>
  </div>
</template>
<script>
import {mapActions} from "vuex";

export default {
  name: 'App',
  methods: {
    ...mapActions('settings', ['getSettings']),
    ...mapActions('auth', ['handleAuthStateChange']),
  },
  mounted() {
    this.handleAuthStateChange()
    this.getSettings()
  }
}
</script>

<style lang="scss">
//this style come in todo components with class :

.text-strikethrough {
  text-decoration: line-through;
}
</style>
