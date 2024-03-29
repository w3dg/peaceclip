const { clipboard } = electron;
const Datastore = nedb,
  db = new Datastore({ filename: "peaceclipDatabase.db", autoload: true });

const app = new Vue({
  el: "#app",
  data: function () {
    return {
      title: "Peace Clip",
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
          if (data[i] !== "") {
            this.clipHistory.push(data[i]);
            console.log("pushed index " + i + "value" + data[i]);
          }
        }
      }
    });
  },
  mounted() {
    setInterval(this.insertHistorytoDB, 5000);
    setInterval(this.checkClipboard, 1000);
  },
  methods: {
    checkClipboard() {
      if (clipboard.availableFormats()[0].startsWith("text")) {
        const text = clipboard.readText();
        if (this.clipHistory[this.clipHistory.length - 1] !== text) {
          this.clipHistory.push(text);
        }
      }
    },

    insertHistorytoDB() {
      db.insert({ data: this.clipHistory }, function (err, newDocs) {});
    },
    itemClicked(item) {
      const index = this.clipHistory.indexOf(item);
      this.clipHistory.splice(index, 1);
      clipboard.writeText(item);
      window.scrollTo(0, 0);
    },
    deleteAllItems() {
      this.clipHistory.splice(0, this.clipHistory.length);
    },
  },
});
