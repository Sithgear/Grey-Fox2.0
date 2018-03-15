var sithgearApp = require('./sithgear-app')
var port = process.env.PORT || 8081;

var sithgearServer = sithgearApp.listen(port,function(){
  console.log('Sithgear-app Online! ' + port);
});
