<template>
  <q-card>
    <ModalHeader>Edit Task</ModalHeader>
    <q-form @submit.prevent="submitForm">
      <q-card-section>
        <ModalTaskName :name.sync="taskToSubmit.name" ref="modalTaskName"></ModalTaskName>
        <modal-dou-date :douDate.sync="taskToSubmit.douDate" @clear="clearDouDate"></modal-dou-date>
        <div v-if="taskToSubmit.douDate" class=" row q-mb-sm">
          <modal-dou-time :douTime.sync="taskToSubmit.douTime"></modal-dou-time>
        </div>
      </q-card-section>
      <modal-buttons></modal-buttons>
      <pre>{{ taskToSubmit }}</pre>
    </q-form>
  </q-card>
</template>

<script>
import {mapActions} from 'vuex'
import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'

export default {
  name: "EditTask",
  mixins: [mixinAddEditTask],
  props: ['task', 'id'],
  data() {
    return {
      taskToSubmit: {}
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
      this.$emit('close')
    },
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task)
  }
}
</script>

<style scoped>

</style>
