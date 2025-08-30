Vue.createApp({
  data() {
    return {
      myName: "Samuel Bouffard",
      myAge: 31,
      image: "https://livvet.vet/wp-content/uploads/2025/05/golden-retriever-photo-profil-livvet-min.png"
    };
  },
  methods: {
    favoriteNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");
