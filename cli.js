#!/usr/bin/env node
'use strict';
const chalk = require('chalk');
const meow = require('meow');
const githubGists = require('./');

const cli = meow(`
	Example
	  $ github-gists kevva
	  $ github-gists kevva --token 523ef69119eadg12

	Options
	  -t, --token  GitHub authentication token
`, {
	string: ['token'],
	alias: {t: 'token'}
});

if (cli.input.length === 0) {
	console.error('User required');
	process.exit(1);
}

githubGists(cli.input[0], cli.flags).then(data => {
	for (const x of data) {
		console.log(`${x.description} ${chalk.dim(x.html_url)}`);
	}
});
