const Router = require('koa-router')

const router = new Router({
  prefix:'/city'
})

router.get('/list',async (ctx) => {
  ctx.body = {
    list:['北京','天津']
  }
})

module.exports = router
