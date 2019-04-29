var system = require('system');
var page = require('webpage').create();
var fs = require('fs')

if (system.args.length === 3){
  console.log('ERROR from phantomjs args');
  phantom.exit();
}

var url = system.args[1];
var image_name = system.args[3];
var view_port_width = system.args[2];

page.viewportSize = {width: view_port_width, height: 1500};
page.settings = {loadImages: false, javascriptEnabled: true};

page.settings.userAgent = 'Mozilla/5.0 (Linux; <Android Version>; <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>';

page.open(url, function(status){

  console.log('Setting slider backgroud color white');
  var pinterest_panel = page.evaluate(function(s){
    return document.body.style.backgroundColor = 'white';
  });

  if(status === 'success'){
    window.setTimeout(function(){
      console.log('Snapping ' + url + ' at width ' + view_port_width);
      page.render(image_name);
      phantom.exit();
    }, 2000);
  } else {
    console.log('Error with page' + url);
    phantom.exit();
  }
});
