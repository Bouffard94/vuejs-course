Vue.createApp({
  data() {
    return {
      text: "",
      textConfirmed: "",
    };
  },
  methods: {
    showAlert() {
      alert("Coucou!!");
    },
    setText(event) {
      this.text = event.target.value;
    },
    confirmText() {
      this.textConfirmed = this.text;
    },
  },
}).mount("#assignment");
