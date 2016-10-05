'use strict';

let marked = require('marked');

exports.handle = (event, context, callback) => {
  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    xhtml: true,
  });

  let markdown = event.markdown;

  marked(markdown, (err, content) => {
    if (err) {
      callback(err);
    }

    let enml =
      '<?xml version="1.0" encoding="UTF-8">\n' +
      '<!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd">\n' +
      '<en-note>\n' +
      content +
      '<\\en-note>';

    callback(null, { enml: enml });
  });
}
