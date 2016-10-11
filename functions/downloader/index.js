'use strict';

let Dropbox = require('dropbox');

exports.handle = (event, context, callback) => {
  let path = event.path;
  let client = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN });
  let promise = client.filesDownload({ path: path });

  promise.then(resp => {
    callback(null, Buffer.from(resp.fileBinary, 'binary').toString());
  }).catch(err => {
    callback(err);
  });
};
