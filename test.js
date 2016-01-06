'use strict';
var test = require('ava');
var githubGists = require('./');

test(function (t) {
	t.plan(1);

	githubGists('sindresorhus').then(function (data) {
		t.assert(data.length, data.length);
	});
});
