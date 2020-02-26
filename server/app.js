const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
});

router.get('/', async ctx => {
    ctx.body = 'hello koa!';
});

app.use(router.routes());

app.listen(9999);
