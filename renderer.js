const { clipboard } = require("electron");
const Datastore = require("nedb"),
  db = new Datastore({ filename: "peaceclipDatabase.db", autoload: true });

const app = new Vue({
  el: "#app",
  data: function () {
    return {
      title: "📎 Peace Clip",
      clipHistory: [],
    };
  },
  created() {
    console.log(this.clipHistory);
    db.find({}, (err, docs) => {
      const { data } = docs[docs.length - 1];
      for (let i = 0; i < data.length; i++) {
        if (data[i] != "") {
          this.clipHistory.push(data[i]);
        }
      }
    });
  },
  mounted() {
    setTimeout(setInterval(this.checkClipboard, 1000), 5000);
    // setInterval(this.insertHistorytoDB, 1800000 );
    setInterval(this.insertHistorytoDB, 10000);
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
