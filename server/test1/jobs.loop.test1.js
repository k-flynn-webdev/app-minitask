// const loop = require('../services/jobs/jobs.loop.js');
//
// let temp_job = { url : 'https://www.google.com/', active: true, method : '', params : '', user : { id: '5d8cc974f14001679cb90caf', name: 'dsfsf' }, ping : 123, job_id : 1697179240 };
//
// process.env.TEST_SUITE = 'gobal-test';
//
//
// describe('Loop', function() {
//
// 	it('jobs loop should exist', function() {
// 		expect(loop.init).toBeDefined();
// 		expect(loop.exec).toBeDefined();
// 		expect(loop.add_ping).toBeDefined();
// 		expect(loop.loop_exec).toBeDefined();
// 	});
//
// 	it('jobs loop next iterator should iterate', function() {
// 		let jobs = [temp_job,temp_job,temp_job];
// 		function ready(next){
// 			return true;
// 		}
// 		function todo(input,next){
// 			return next(null,true);
// 		}
//
// 		let result = loop.loop_exec(jobs,ready,todo,ready);
// 		expect(result.toString()).toBe([true,true,true].toString());
// 	});
//
// 	it('add ping should edit a job', function() {
//
// 		let job = { active : true, status : true, job_id : '1231231', user : { id: '5d94901865fb022dac1d8122', name: 'dsfsdf' }, fails : [] };
// 		let ping = { url : 'test.com', status : 99 };
//
// 		loop.add_ping(job,ping);
//
// 		expect(job.status).toEqual(false);
// 		expect(job.fails[0].date).toBeTruthy();
// 		expect(job.fails[0].id).toBeTruthy();
// 	});
//
// });