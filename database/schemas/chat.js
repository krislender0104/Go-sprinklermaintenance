var mysql = require('mysql');
var mongoose = require('mongoose');
var connection = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'Numb3r1$',
	database:'meanchat'
});
module.exports = connection;




