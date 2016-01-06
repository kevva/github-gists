'use strict';
var ghGot = require('gh-got');
var Promise = require('pinkie-promise');

module.exports = function (user, opts) {
	opts = opts || {};

	var page = 1;
	var ret = [];

	if (typeof user !== 'string') {
		return Promise.reject(new TypeError('Expected a string'));
	}

	return (function loop() {
		var url = 'users/' + user + '/gists?per_page=100&page=' + page;

		return ghGot(url, opts).then(function (res) {
			ret = ret.concat(res.body);

			if (res.headers.link && res.headers.link.indexOf('next') !== -1) {
				page++;
				return loop();
			}

			return ret;
		});
	})();
};
