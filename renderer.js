const { clipboard } = require("electron");
const Datastore = require("nedb"),
  db = new Datastore({ filename: "peaceclipDatabase.db", autoload: true });

const app = new Vue({
  el: "#app",
  data: {
    title: "📎 Peace Clip",
    clipHistory: [],
  },
  mounted() {
    db.find({}, function (err, docs) {
      const { data } = docs[docs.length - 1];
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        console.log("WAT", data[i]);
        // this.clipHhistory.push(data[i]);
        console.log(i);
      }
    });
    // setInterval(this.insertHistorytoDB, 1800000 );
    setInterval(this.insertHistorytoDB, 10000);
    setInterval(this.checkClipboard, 1000);
  },
  methods: {
    checkClipboard() {
      const text = clipboard.readText();
      if (this.clipHistory[this.clipHistory.length - 1] !== text) {
        this.clipHistory.push(text);
      }
    },

    insertHistorytoDB() {
      db.insert({ data: this.clipHistory }, function (err, newDocs) {});
    },
  },
});
