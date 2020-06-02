const { clipboard } = require("electron");

const app = new Vue({
  el: "#app",
  data: {
    title: "😎 Peace Clip",
    history: [],
  },
  mounted() {
    setInterval(this.checkClipboard, 1000);
  },
  methods: {
    checkClipboard() {
      const text = clipboard.readText();
      if (this.history[this.history.length - 1] !== text) {
        this.history.push(text);
      }
    },
  },
});
