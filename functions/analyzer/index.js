'use strict';

let Dropbox = require('dropbox');

exports.handle = (event, context, callback) => {
  let directory = event.directory;
  let currentRevision = event.revision;
  let client = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });
  let promise = client.filesListFolder({ path: directory });

  promise.then(resp => {
    let items = resp.entries.filter(entry => {
      return entry.rev > currentRevision;
    }).sort((a, b) => {
      if (a.rev > b.rev) { return -1; }
      if (a.rev < b.rev) { return 1; }
      return 0;
    });

    if (items.length > 0) {
      let latestRevision = items[0].rev;
      callback(null, { items: items, revision: latestRevision });
    }

    callback('No item found.');
  }).catch(err => {
    callback(err);
  });
};
