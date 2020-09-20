const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapters = new FileSync('db.json');
db = lowdb(adapters);
db.defaults({users: []}).write();

module.exports = db;