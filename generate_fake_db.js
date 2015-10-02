/**
 * 
Generates fake data of ATS test results
 */

var faker = require('faker');

var results = [];

for(var i = 10; i < 11; i += 1){
	var obj = {};
	obj.student_record = {}
	obj.student_record.ticket = faker.random.uuid().substring(0,8);
	results.push(obj);
}
console.log(JSON.stringify(results, null, 2));