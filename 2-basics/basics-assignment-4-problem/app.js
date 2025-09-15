const app = Vue.createApp({
  data() {
    return {
      className: "",
      showParagraph: true,
      color: "",
    };
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.className === "user1",
        user2: this.className === "user2",
        visible: this.showParagraph,
        hidden: !this.showParagraph,
      };
    },
  },
  methods: {
    showHideParagraph() {
      this.showParagraph = !this.showParagraph;
    },
  },
});

app.mount("#assignment");
