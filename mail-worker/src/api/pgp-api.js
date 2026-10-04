import app from '../hono/hono';
import pgpService from '../service/pgp-service';
import result from '../model/result';

app.get('/pgp/key-status', async (c) => {
	const status = await pgpService.keyStatus(c, c.req.query('email') || '');
	return c.json(result.ok(status));
});
