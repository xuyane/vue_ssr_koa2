const router = require('koa-router')()
// 引入模型
const Person = require('../dbs/models/person')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

// 新增接口
router.post('/addPerson', async function (ctx) {
  const person = new Person({
    name: ctx.request.body.name,
    age: ctx.request.body.age
  })
  let code
  try {
    await person.save()
    code = 0
  } catch (e) {
    code = -1
  }
  ctx.body = {
    code
  }
})

router.post('/getPerson',async function(ctx){
  const result = await Person.findOne({name:ctx.request.body.name})
  const results = await Person.find({name:ctx.request.body.name})
  ctx.body = {
    code:0,
    result,
    results
  }
})

router.post('/updatePerson',async function(ctx){
  const result = await Person.where({
    name:ctx.request.body.name
  }).update({
    age:ctx.request.body.age
  })
  ctx.body = {
    code:0
  }
})

router.post('/removePerson',async function(ctx){
  const result = await Person.where({
    name:ctx.request.body.name
  }).remove()
  ctx.body = {
    code :0
  }
})
module.exports = router