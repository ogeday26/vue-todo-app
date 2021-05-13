<template>
  <div class="container-fluid">
    <div class="row">
      <div id="" class="col-md-4" style="min-height: 300px;">
        Open
        <draggable
          :v-model="{ get() { return getOpenTask }, set() { $store.commit('addOpenTask', value) } }"
          group="task-list"
        >
          <Task
            v-for="(e, i) in getOpenTask"
            :key="`open${i}`"
            :title="e.title"
            :description="e.description"
          />
        </draggable>
      </div>
      <div class="col-md-4" style="min-height: 300px;">
        Progress
        <draggable
          :v-model="{
            get() { return getProgressTask },
            set() { $store.commit('addProgressTask', value) }
          }"
          group="task-list"
        >
          <Task
            v-for="(e, i) in getProgressTask"
            :key="`open${i}`"
            :title="e.title"
            :description="e.description"
          />
        </draggable>
      </div>
      <div class="col-md-4" style="min-height: 300px;">
        Close
        <draggable
          :v-model="{
            get() { return getCloseTask },
            set() { $store.commit('addCloseTask', value) }
          }"
          group="task-list"
        >
          <Task
            v-for="(e, i) in getCloseTask"
            :key="`open${i}`"
            :title="e.title"
            :description="e.description"
          />
        </draggable>
      </div>
    </div>
    <b-button v-b-modal.create-task>Create Task</b-button>

    <b-modal id="create-task" title="Create Task">
      <b-form-select v-model="taskForm.list" :options="listOptions"></b-form-select>
      <b-form-input v-model="taskForm.title" placeholder="Title" />
      <b-form-input v-model="taskForm.description" placeholder="Description" />
      <b-button @click="addTask" primary>Save And Close</b-button>
      <div slot="modal-footer"></div>
    </b-modal>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { mapGetters } from 'vuex';
import Task from '../components/Task.vue';

export default {
  components: {
    Task,
    draggable,
  },
  data() {
    return {
      taskForm: {
        list: 'open',
        title: '',
        description: '',
      },
      listOptions: [
        {
          value: 'open',
          text: 'Open',
        },
        {
          value: 'progress',
          text: 'Progress',
        },
        {
          value: 'close',
          text: 'Close',
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['getOpenTask', 'getProgressTask', 'getCloseTask']),
  },
  methods: {
    addTask() {
      const data = {
        title: this.taskForm.title,
        description: this.taskForm.description,
      };

      switch (this.taskForm.list) {
        case 'open':
          this.$store.commit('addOpenTask', data);
          break;
        case 'progress':
          this.$store.commit('addProgressTask', data);
          break;
        case 'close':
          this.$store.commit('addCloseTask', data);
          break;
        default:
          break;
      }

      this.taskForm.list = 'open';
      this.taskForm.title = '';
      this.taskForm.description = '';
      this.$bvModal.hide('create-task');
    },
  },
};
</script>

<style>
</style>
