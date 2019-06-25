function m1(ctx){
  global.console.log('m1',ctx.path);
}

module.exports = function(){
  return async function(ctx,next){
    global.console.log('m1 start');
    m1(ctx);
    await next();
    global.console.log('m1 end');
  }
}