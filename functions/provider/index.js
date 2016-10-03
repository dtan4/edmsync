'use strict';

let AWS = require('aws-sdk');

const TableName = 'Edmsync';

exports.handle = (event, context, callback) => {
  let dynamodb = new AWS.DynamoDB();
  let request = dynamodb.scan({
    TableName: TableName,
  })
  let promise = request.promise();

  promise.then(data => {
    data.Items.forEach(item => {
      console.log(item);
    });
  }).catch(err => {
    callback(err);
  });
}
