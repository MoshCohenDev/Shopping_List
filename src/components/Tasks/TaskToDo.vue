<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <list-header
        v-if="!settings.showTaskInOneList"
        bgColor="bg-info">Todo</list-header>
      <q-list
        separator
        bordered padding>
        <task
          v-for="(task,key) in tasksToDo"
          :id="key"
          :key="key"
          :task="task">
        </task>
      </q-list>
    </div>
  </transition>
</template>

<script>
import Task from "components/Tasks/Task";
import ListHeader from "components/Tasks/Modals/Shared/ListHeader";
import {mapGetters} from "vuex";

export default {
  name: "TaskToDo",
  components: {ListHeader, Task},
  props: ['tasksToDo'],
  computed: {
    ...mapGetters('settings', ['settings'])
  }
}
</script>

<style scoped>

</style>
