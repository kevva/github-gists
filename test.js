import test from 'ava';
import fn from './';

test(async t => {
	const data = await fn('sindresorhus');
	t.ok(data.length);
});
