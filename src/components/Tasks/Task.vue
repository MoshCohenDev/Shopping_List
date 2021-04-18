<template>
  <q-item
    v-ripple
    @click="updateTask({id : id , updates :  {done: !task.done}})"
    :class="!task.done ? 'primary':'bg-green-2 '"
    clickable
  >
    <q-item-section side top>
      <q-checkbox
        v-model="task.done"
        class="no-pointer-events"
      />
    </q-item-section>
    <q-item-section>
      <q-item-label :class="{'text-strikethrough':task.done}"
                    v-html="$options.filters.searchHighLight(task.name,search)"
      >
      </q-item-label>
    </q-item-section>

    <q-item-section
      v-if="task.douDate"
      side
    >
      <div class="row">
        <div class="column-justify-center">
          <q-icon
            name="event"
            size="18px"
            class="q-mr-xs"/>
        </div>
        <div class="column">
          <q-item-label class="row-justify-end" caption>
            {{ task.douDate | niceDate }}
          </q-item-label>
          <q-item-label caption>
            <small> {{ taskDueTime }}</small>
          </q-item-label>
          <q-icon v-show="task.done" name="star" color="yellow"/>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showEditTask=true"
          flat
          dense
          round
          color="primary"
          icon="edit"
        ></q-btn>
        <q-btn
          @click.stop="confirm = true"
          flat
          dense
          round
          color="negative"
          icon="delete"
        ></q-btn>
        <q-dialog v-model="showEditTask">
          <edit-task :task="task" :id="id" @close="showEditTask=false"></edit-task>
        </q-dialog>
      </div>
    </q-item-section>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Are you sure delete this task?</span>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Cancel" color="primary" v-close-popup/>
          <q-btn flat label="Yes" @click="deleteTaskById(id)" color="primary" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-item>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'
import {date} from 'quasar'
import EditTask from "components/Tasks/Modals/EditTask";

export default {
  name: "Task",
  components: {EditTask},
  props: ['task', 'id'],
  computed: {
    ...mapState('tasks', ['search']),
    ...mapGetters('settings', ['settings']),
    taskDueTime() {
      if (this.settings.show12HourTimeFormat) {
        return date.formatDate(this.task.douDate + ' ' + this.task.douTime, 'h:mmA')
      }
      return this.task.douTime
    },
  },
  data() {
    return {
      confirm: false,
      showEditTask: false,
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),


    deleteTaskById(id) {
      this.deleteTask(id)
    }
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, 'MMM D YY')
    },
    searchHighLight(value, search) {
      if (search) {
        let searchRegExp = new RegExp(search, 'ig')

        return value.replace(searchRegExp, (match) => {
          return '<span class="bg-yellow-6">' + match + '</span>'
        })
      }
      return value
    }
  }
}
</script>

<style scoped>

</style>

