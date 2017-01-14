var Lab = require('../models/todo');
module.require('./passportroutes.js')

function getLabs(res){
	Lab.find(function(err, labs) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(labs); // return all labs in JSON format
		});
};

function getuniqueLabs(res){
	Lab.findOne().distinct('labname', function(err, labs) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(labs); // return all labs in JSON format
		});
};

function getLabsbyid(res,labid){
	
	Lab.find({labuser: labuser}, function(err, labs) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(labs); // return all todos in JSON format
		});
};

function getLabsgold(res){
	
	Lab.find({labtype: 'goldlab'}, function(err, labs) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(labs); // return all todos in JSON format
		});
};

function getLabsdcloud(res){
	
	Lab.find({labtype: 'dcloud'}, function(err, labs) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(labs); // return all todos in JSON format
		});
};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all labs
	app.get('/api/labs', function(req, res) {

		// use mongoose to get all labs in the database
		getLabs(res);
	});

	// api ---------------------------------------------------------------------
	// get all labs
	app.get('/api/uniquelabs', function(req, res) {

		// use mongoose to get all labs in the database
		getuniqueLabs(res);
	});

// api ---------------------------------------------------------------------
	// get all gold labs
	app.get('/api/labs/gold', function(req, res) {

		// use mongoose to get all labs in the database
		getLabsgold(res);
	});

//api ---------------------------------------------------------------------
	// get all dcloud labs
	app.get('/api/labs/dcloud', function(req, res) {

		// use mongoose to get all labs in the database
		getLabsdcloud(res);
	});

// get labs by user

app.get('/api/labs/:labuser', function(req, res) {
            labuser = req.params.labuser
			getLabsbyid(res,labuser);
		});

		// create todo and send back all todos after creation
app.post('/api/labs', function(req, res) {
		// create a lab, information comes from AJAX request from Angular
		Lab.create({
			labname : req.body.labname,
			labtype : req.body.labtype,
			labarch : req.body.labarch,
			labstatus : req.body.labstatus,
			labuser : req.body.labuser,
			goldurl : req.body.goldurl,
			goldclassname : req.body.goldclassname,
			dcloudid : req.body.dcloudid,
			dclouduser : req.body.dclouduser,
			dcloudpass : req.body.dcloudpass,
            dcloudid: req.body.dcloudid,
            dclouduser: req.body.dclouduser,
            dcloudpass: req.body.dcloudpass,
            dcloudasa: req.body.dcloudasa,
            dcloudpubip: req.body.dcloudpubip,
            guacurl: req.body.guacurl,	
			done : false
		}, function(err, Lab) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getLabs(res);
		});

	});
	// create todo and send back all todos after creation
	app.post('/api/booklab', function(req, res) {
    var labname = req.body.labname;
	var labuser = req.body.labuser;
	var labstat = 'Booked';
Lab.findOneAndUpdate({labname: labname, labstatus: 'Available'},{labstatus : labstat ,labuser:labuser},function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }
    console.log(doc);
	getLabs(res);
});
			
		});
	// delete a lab
	app.delete('/api/labs/:lab_id', function(req, res) {
		Lab.remove({
			_id : req.params.lab_id
		}, function(err, Lab) {
			if (err)
				res.send(err);

			getLabs(res);
		});
	});

	
};