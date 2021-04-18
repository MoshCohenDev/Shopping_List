<template>
  <q-select
    v-model="sortBy"
    :options="options"
    map-options
    class="col q-ml-sm"
    filled
    emit-value
    label="Sort by"
    stack-label
  />
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: "Sort",
  data() {
    return {
      options: [
        {
          label: 'Name',
          value: 'name'
        },
        {
          label: 'Date',
          value: 'douDate'
        }
      ]
    }
  },
  computed: {
    ...mapState('tasks', ['sort']),
    sortBy: {
      get() {
        return this.sort
      },
      set(value) {
        this.setSort(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['setSort'])
  }
}
</script>

<style scoped>

</style>
