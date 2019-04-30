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

//page.settings.userAgent

page.open(url, function(status){
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
