var ReactDOM = require('react-dom');
//import App from './App'

var expect = require('chai').expect
var request = require('request')
//var assert = require('assert')
//var http = require('http')

it('API is up and working', function (done) {
  request('http://localhost:3020/url', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      done()
    }
  })
})

it('Main page content', function (done) {
  request('http://localhost:3000', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      done()
    }
  })
})
