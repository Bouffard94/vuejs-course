const ADD_TASK_MESSAGE = "Add Task";
const TASKS_HIDDEN_MESSAGE = "Task are now hidden";

Vue.createApp({
  computed: {
    addTaskButtonCaption() {
      return this.showList ? ADD_TASK_MESSAGE : TASKS_HIDDEN_MESSAGE;
    },
  },
  data() {
    return {
      tasks: [],
      newTask: "",
      showList: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask);
    },
    showHideList() {
      this.showList = !this.showList;
    },
  },
}).mount("#assignment");
