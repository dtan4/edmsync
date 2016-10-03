export default (event, context, callback) => {
  console.log('hello');

  callback(null, { 'message': 'hello' })
}
