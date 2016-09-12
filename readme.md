# github-gists [![Build Status](https://travis-ci.org/kevva/github-gists.svg?branch=master)](https://travis-ci.org/kevva/github-gists)

> Get all gists from a GitHub user


## Install

```
$ npm install --save github-gists
```


## Usage

```js
const githubGists = require('github-gists');

githubGists('johndoe').then(data => {
	console.log(data);
	//=> [{url: https://api.github.com/gists/1234567', ...}, ...]
});
```


## API

### githubGists(user, [options])

#### user

Type: `string`

Username to fetch gists from.

#### options

##### token

Type: `string`

Token to authenticate with. Use this to increase the request count. GitHub supports
up to 60 unauthenticated request per hour.

If you don't have a token you can generate a new one [here](https://github.com/settings/tokens/new).


## Related

* [github-gists-cli](https://github.com/kevva/github-gists-cli) - CLI for this module


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
