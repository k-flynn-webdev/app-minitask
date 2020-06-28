// const update = require('../api/logic/job/api.job.update.js');
//
// let temp_job = { url : 'https://www.google.com/', active: true, method : '', params : '', user : { id: '5d8cc974f14001679cb90caf', name: 'temporary name here' }, ping : 123, job_id : -1454934947 };
//
// process.env.TEST_SUITE = 'update-test';
//
//
// describe('job update tests', function() {
//
// 	it('job update should exist', function() {
// 		expect(update.update).toBeDefined();
// 	});
// 	// // todo : this needs to be an end to end test
// 	// it('job update should not update a empty job', function() {
// 	// 	update.update(null, function(error,result){
// 	// 		expect(error.message).toBe('Missing information.');
// 	// 	});
// 	// });
// 	// // todo : this needs to be an end to end test
// 	// it('job update should not update a job missing url', function() {
// 	// 	let tmp = { user: temp_job.user, ping: temp_job.ping, job_id : 247259029 };
// 	// 	update.update({ job: tmp}, function(error,result){
// 	// 		expect(error.message).toBe('Missing url.');
// 	// 	});
// 	// });
// 	// // todo : this needs to be an end to end test
// 	// it('job update should not update a job with invalid url', function() {
// 	// 	let tmp = { url: 'localh', user: temp_job.user, ping: temp_job.ping, job_id : 247259029 };
// 	// 	update.update({ job: tmp}, function(error,result){
// 	// 		expect(error.message).toBe('Invalid url.');
// 	// 	});
// 	// });
// 	// // todo : this needs to be an end to end test
// 	// it('job update should not update a job with invalid url', function() {
// 	// 	let tmp = { url: 'google.c', user: temp_job.user, ping: temp_job.ping, job_id : 247259029 };
// 	// 	jobs_update(tmp, function(error,result){
// 	// 		expect(error.message).toBe('Invalid url.');
// 	// 	});
// 	// });
// 	// // todo : this needs to be an end to end test
// 	// it('job update should not update a job missing ping', function() {
// 	// 	let tmp = { url: temp_job.url, user: temp_job.user, job_id : 247259029 };
// 	// 	jobs_update(tmp, function(error,result){
// 	// 		expect(error.message).toBe('Missing ping.');
// 	// 	});
// 	// });
// 	// // todo : this needs to be an end to end test
// 	// it('job update should not update a job missing user', function() {
// 	// 	let tmp = { url: temp_job.url, ping: temp_job.ping, job_id : 247259029 };
// 	// 	jobs_update(tmp, function(error,result){
// 	// 		expect(error.message).toBe('Missing user.');
// 	// 	});
// 	// });
// 	// // todo : this needs to be an end to end test
// 	// it('job update should not update a job with malformed user <', function() {
// 	// 	let tmp = { url: temp_job.url, user: '5d8cc974f14001679cb90ca', ping: temp_job.ping, job_id : 247259029 };
// 	// 	jobs_update(tmp, function(error,result){
// 	// 		expect(error.message).toBe('Invalid user.');
// 	// 	});
// 	// });
// 	// // todo : this needs to be an end to end test
// 	// it('job update should not update a job with malformed user >', function() {
// 	// 	let tmp = { url: temp_job.url, user: '5d8cc974f14001679cb90ca11', ping: temp_job.ping, job_id : 247259029 };
// 	// 	jobs_update(tmp, function(error,result){
// 	// 		expect(error.message).toBe('Invalid user.');
// 	// 	});
// 	// });
// 	// // todo : this needs to be an end to end test
// 	// it('job update should not update a invalid job', function() {
// 	// 	let tmp = { url: '', user: '', ping: '', job_id : 247259029 };
// 	// 	update.update(tmp, function(error,result){
// 	// 		expect(error.message).toBe('Missing url.');
// 	// 	});
// 	// });
// 	// // todo : this needs to be an end to end test
// 	// it('job update should return', function() {
// 	// 	temp_job.url = 'www.newurl.com';
// 	// 	jobs_update(temp_job, function(error,result){
// 	// 		expect(result.url).toBe('http://' + temp_job.url);
// 	// 		expect(result.method).toBe('GET');
// 	// 		expect(result.fails).toEqual(expect.any(Array));
// 	// 		expect(result.user.toString()).toBe(temp_job.user.toString());
// 	// 		expect(result.job_id.toString()).toBe(temp_job.job_id.toString());
// 	// 	});
// 	// });
// 	// // todo : this needs to be an end to end test
// 	// it('job update should return method (post)', function() {
// 	// 	temp_job.method = 'post';
// 	// 	jobs_update(temp_job, function(error,result){
// 	// 		expect(result.method).toBe('POST');
// 	// 	});
// 	// });
// 	// // todo : this needs to be an end to end test
// 	// it('job update should return method (put)', function() {
// 	// 	temp_job.method = 'put';
// 	// 	jobs_update(temp_job, function(error,result){
// 	// 		expect(result.method).toBe('PUT');
// 	// 	});
// 	// });
// 	// // todo : this needs to be an end to end test
// 	// it('job update should return method (delete)', function() {
// 	// 	temp_job.method = 'delete';
// 	// 	jobs_update(temp_job, function(error,result){
// 	// 		expect(result.method).toBe('DELETE');
// 	// 	});
// 	// });
// });
