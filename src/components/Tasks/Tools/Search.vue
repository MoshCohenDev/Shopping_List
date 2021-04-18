<template>
  <q-input
    outlined
    @keyup.esc="SearchField = ''"
    class="col"
    v-model="SearchField"
    label="Search">
    <template v-slot:append>
      <q-icon
        v-if="SearchField  !== ''"
        name="close"
        @click="SearchField = ''"
        class="cursor-pointer"/>
      <q-icon name="search"/>
    </template>
  </q-input>
</template>
<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: "Search",
  computed: {
    ...mapState('tasks', ['search']),
    SearchField: {
      get() {
        return this.search
      },
      set(value) {
        this.setSearch(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['setSearch'])
  }
}
</script>

<style scoped>

</style>
