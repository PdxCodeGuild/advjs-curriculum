const Hello = require('./hello')
const yo = require('yo-yo')

const container = document.getElementById('app-container')

const el = Hello("Ben Bitdiddle")

// mount component to the DOM
container.appendChild(el)
