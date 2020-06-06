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
  computed: {
    historyReversed() {
      return this.clipHistory.slice().reverse();
    },
  },
  created() {
    db.find({}, (err, docs) => {
      if (err) {
        console.error(err);
      }
      if (docs.length > 1) {
        const { data } = docs[docs.length - 1];
        for (let i = 0; i < data.length; i++) {
          if (data[i] != "") {
            this.clipHistory.push(data[i]);
            console.log(data[i]);
          }
        }
      }
    });
  },
  mounted() {
    // in main app
    // setInterval(this.insertHistorytoDB, 1800000 );
    // in dev
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
    itemClicked(item) {
      clipboard.writeText(item);
    },
  },
});
