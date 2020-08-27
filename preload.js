// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const electron = require("electron");
const nedb = require("nedb");

window.electron = electron;
window.nedb = nedb;
