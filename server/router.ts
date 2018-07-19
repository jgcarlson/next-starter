import * as Router from 'koa-router';

export default (app: any) => {

  const router = new Router();

  router.get('/a', async (ctx) => {
    await app.render(ctx.req, ctx.res, '/a', ctx.query);
    ctx.respond = false;
  });

  router.get('/b', async (ctx) => {
    await app.render(ctx.req, ctx.res, '/b', ctx.query);
    ctx.respond = false;
  });

  return router;

};
