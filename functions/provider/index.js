'use strict';

let AWS = require('aws-sdk');

const TableName = 'Edmsync';

exports.handle = (event, context, callback) => {
  let dynamodb = new AWS.DynamoDB();
  let request = dynamodb.scan({
    TableName: TableName,
  });
  let promise = request.promise();

  promise.then(data => {
    let items = data.Items.map(item => {
      return { Directory: item.Directory.S, Notebook: item.Notebook.S };
    });

    callback(null, items);
  }).catch(err => {
    callback(err);
  });
};
