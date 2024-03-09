
import { Hono } from 'https://deno.land/x/hono@v4.0.10/mod.ts';
import { cors } from 'https://deno.land/x/hono@v4.0.10/middleware.ts';

import users from './routes/users.ts';

const app = new Hono().use('*', cors()).route('/users', users);

export type tRouter = typeof app;

Deno.serve(app.fetch);
