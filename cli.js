#!/usr/bin/env node
'use strict';

var chalk = require('chalk');
var meow = require('meow');
var githubGists = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ github-gists kevva',
		'  $ github-gists kevva --token 523ef69119eadg12',
		'',
		'Options',
		'  -t, --token    GitHub authentication token'
	].join('\n')
}, {
	string: ['token'],
	alias: {t: 'token'}
});

if (!cli.input[0]) {
	console.error('User required');
	process.exit(1);
}

githubGists(cli.input[0], cli.flags, function (err, data) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	data.forEach(function (gist) {
		console.log(gist.description + ' ' + chalk.dim(gist.html_url));
	});
});
