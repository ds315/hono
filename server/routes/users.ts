
import { Hono } from 'https://deno.land/x/hono@v4.0.10/mod.ts';

export default new Hono().get('/:id', c => c.json({
	id: c.req.param('id'),
	name: 'Test',
	age: 30
}));
