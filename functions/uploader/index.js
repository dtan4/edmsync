'use strict';

let Evernote = require('evernote').Evernote;

exports.handle = (event, context, callback) => {
  let notebookName = event.notebook;
  let fileName = event.fileName;
  let enml = event.enml;

  let client = new Evernote.Client({
    token: process.env.EVERNOTE_TOKEN,
    sandbox: false,
  });

  let noteStore = client.getNoteStore();

  noteStore.listNotebooks((err, notebooks) => {
    if (err) {
      callback(err);
      return;
    }

    let notebook = notebooks.find(nb => {
      return nb.name == notebookName;
    });

    if (notebook == undefined) {
      callback('notebook ' + notebookName + ' is not found');
      return;
    }

    let newNote = new Evernote.Note();

    newNote.title = fileName;
    newNote.content = enml;
    newNote.notebookGuid = notebook.guid;

    noteStore.createNote(newNote, (err, note) => {
      if (err) {
        callback(err);
        return;
      }

      callback(null, { note: JSON.stringify(note) });
    });

    console.log(8);
  });
};
