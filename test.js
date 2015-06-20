'use strict';
var test = require('ava');
var githubGists = require('./');

test(function (t) {
	t.plan(2);

	githubGists('sindresorhus', function (err, data) {
		t.assert(!err, err);
		t.assert(data.length, data.length);
	});
});
