<template>
  <div :class="{'q-mt-lg':!settings.showTaskInOneList}">

    <list-header
      v-if="!settings.showTaskInOneList"
      bgColor="bg-green-4">Done
    </list-header>
    <q-list
      v-if="Object.keys(tasksDone).length"
      separator
      bordered padding>
      <Task
        v-for="(task,key) in tasksDone"
        :id="key"
        :key="key"
        :task="task">
      </Task>
    </q-list>
  </div>
</template>

<script>
import Task from "components/Tasks/Task";
import ListHeader from "components/Tasks/Modals/Shared/ListHeader";
import {mapGetters} from "vuex";

export default {
  name: "TaskDone",
  components: {ListHeader, Task},
  props: ['tasksDone'],
  computed: {
    ...mapGetters('settings', ['settings'])
  }

}
</script>

<style scoped>

</style>
