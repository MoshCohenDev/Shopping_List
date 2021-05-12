<template>
  <q-page class="q-pa-md">
    <div class="q-pa-md absolute full-width full-height column">
      <div class=" row q-mb-lg">
        <Search/>
        <Sort/>
      </div>
      <q-scroll-area class="q-scroll-area-tasks">
        <p v-if="search && !Object.keys(tasksToDo).length && !Object.keys(tasksDone).length ">No Search </p>
        <no-tasks v-if="!Object.keys(tasksToDo).length && !search && !settings.showTaskInOneList">

        </no-tasks>
        <task-to-do
          v-if="Object.keys(tasksToDo).length"
          :tasksToDo="tasksToDo"/>

        <task-done
          v-if="Object.keys(tasksDone).length"
          class="q-mb-lg"
          :tasksDone="tasksDone"></task-done>

      </q-scroll-area>

      <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
        <q-btn
          @click="showAddTask=true"
          icon="add"
          color="primary"
          class="all-pointer-events"
          round
          size="20px"
        >
        </q-btn>
      </div>
      <q-dialog v-model="showAddTask">
        <add-task @close="showAddTask=false"></add-task>
      </q-dialog>
    </div>
  </q-page>

</template>

<script>
import {mapGetters, mapState} from 'vuex';
import AddTask from "components/Tasks/Modals/AddTask";
import TaskToDo from "components/Tasks/TaskToDo";
import TaskDone from "components/Tasks/TaskDone";
import NoTasks from "components/Tasks/NoTasks";
import Search from "components/Tasks/Tools/Search";
import Sort from "components/Tasks/Tools/Sort";

export default {
  data() {
    return {
      showAddTask: false
    }
  },
  components: {Sort, Search, NoTasks, TaskDone, TaskToDo, AddTask},
  computed: {
    ...mapGetters('tasks', ['tasksToDo', 'tasksDone']),
    ...mapGetters('settings', ['settings']),
    ...mapState('tasks', ['search'])
  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  }
}
</script>

<style lang="scss">
.task {
  text-align: center;
}

.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;

  .electron {
    .q-scroll-area-tasks {
      .scroll {
        height: auto !important;
      }
    }
  }
}
</style>
