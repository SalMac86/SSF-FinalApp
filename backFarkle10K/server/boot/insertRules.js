module.exports = function(app) {
	var jsonArr = require('../ruleset.json');

	var Ruleset = app.models.Ruleset;

	Ruleset.destroyAll();

	jsonArr.forEach(function(ruleDict){
	  Ruleset.create(ruleDict, function(err, record) {
	    if(err) return console.log(err);
 	  });
	
	});
	console.log("Ruleset inserted successfully");

};