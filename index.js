'use strict';

var ghGot = require('gh-got');
var page = 1;
var ret = [];

function getGists(user, opts, cb) {
	var url = 'users/' + user + '/gists?per_page=100&page=' + page;

	ghGot(url, opts, function (err, data, res) {
		if (err) {
			cb(err);
			return;
		}

		ret = ret.concat(data);

		if (res.headers.link && res.headers.link.indexOf('next') !== -1) {
			page++;
			getGists(user, opts, cb);
			return;
		}

		cb(null, ret);
	});
}

module.exports = function (user, opts, cb) {
	opts = opts || {};

	if (typeof user !== 'string') {
		throw new Error('User required');
	}

	if (typeof opts !== 'object') {
		cb = opts;
		opts = {};
	}

	getGists(user, opts, function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, data);
	});
};
