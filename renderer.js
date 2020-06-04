const { clipboard } = require("electron");
const Datastore = require("nedb"),
  db = new Datastore({ filename: "peaceclipDatabase.db", autoload: true });

const app = new Vue({
  el: "#app",
  data: {
    title: "😎 Peace Clip",
    history: [],
  },
  mounted() {
    // setInterval(this.insertHistorytoDB, 1800000 );
    setInterval(this.insertHistorytoDB, 10000);
    setInterval(this.checkClipboard, 1000);
  },
  methods: {
    checkClipboard() {
      const text = clipboard.readText();
      if (this.history[this.history.length - 1] !== text) {
        this.history.push(text);
      }
    },

    insertHistorytoDB() {
      db.insert({ data: this.history }, function (err, newDocs) {});
    },
  },
});
