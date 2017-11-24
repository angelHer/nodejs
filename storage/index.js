'use strict'

var storage = require('node-persist')
storage.initSync()

storage.setItem('name','Angel hl');

module.exports = {
    storage
}