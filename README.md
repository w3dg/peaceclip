# Peace Clip :paperclip:

An electron desktop app which help you to save a history of your clipboard so that from now on you can find stuff copied years ago even today.

Inspired By [Coding Garden's](https://www.twitch.tv/codinggarden) [project](https://github.com/CodingGarden/clipboard-elephant)

## To develop locally

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Fork the repository on your own account

# Clone the forked repository
git clone https://github.com/YOUR_USERNAME/peaceclip.git
# Go into the repository
cd peaceclip
# Install dependencies
npm install
# Run the app
npm start
```

#### NOTE: as this is an electron app it comes with its own security. It is recommended that any libraries or frameworks used are downloaded locally rather than from a CDN or anything else which requires network access.

## :construction: WORK IN PROGRESS

#### :scroll: TODO

- [x] Quickstart from boilerplate
- [x] Styling Changes for app
  - [x] Make Frameless window
  - [x] Set `maximisable` , `minimisable`, `frame`, `skipTaskbar`, `resizable` , `moveable`,`nodeIntegration`, `icon`
  - [x] Hide Window initially and when out of focus (`blur`)
- [x] Set a Tray Icon
  - [x] Show/hide window on click on the tray
- [x] Add Vue and Bulma
- [x] Styling Changes for view such as adding panel, even/odd coloured rows for differentiation of items
- [x] Listen for clipboard changes every ~1-2s
- [x] Add things in clipboard to the history

- [ ] Move History to [nedb](https://github.com/louischatriot/nedb)
- [ ] CRUD (create, read, update, delete) from nedb

  - [ ] Make it efficient like push things from history to nedb every x seconds and query for things on start etc.
  - [ ] Make a `clear-all` button (wipes the db)

- [ ] Make it EFFICIENT ON RESOURCES!!

## STRETCH

- [ ] Store copied images in db as well
- [ ] When user clicks on the stuff write it to the input ( just as windows clipboard does ) if possible

## 🙏 Credits:

<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
