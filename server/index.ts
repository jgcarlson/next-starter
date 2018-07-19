import { createServer } from 'http';
import { parse } from 'url';

import * as Koa from 'koa';
import * as next from 'next';
import Router from './router';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = new Koa();
  const router = Router(app);

  server.use(router.routes());
  server.use(router.allowedMethods());

  router.get('*', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
  // tslint:disable-next-line:no-shadowed-variable
  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
