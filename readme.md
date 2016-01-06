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

*Required*  
Type: `string`

Username to fetch gists from.

#### options.token

Type: `string`

Token to authenticate with. Use this to increase the request count. GitHub supports
up to 60 unauthenticated request per hour.

If you don't have a token you can generate a new one [here](https://github.com/settings/tokens/new).


## CLI

```
$ npm install --global github-gists
```

```
$ github-gists --help

  Usage
    $ github-gists kevva
    $ github-gists kevva --token 523ef69119eadg12

  Options
    -t, --token    GitHub authentication token
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
