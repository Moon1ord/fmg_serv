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
  if(status === 'success'){

    var hide_widgets1 = page.evaluate(function(s){
      return document.getElementById('eng_m_top_ww_widget_22691287151760344').style.display = 'none';
    });

    var hide_widgets2 = page.evaluate(function(s){
      return document.getElementById('eng_m_top_ww_widget_77159216959587310').style.display = 'none';
    });

    console.log('Setting display none to ENGAGEYA_WIDGETS');
    var engage_widgets = page.evaluate(function(s){
      return document.getElementById('ENGAGEYA_WIDGET_105031').style.display = 'none';
    });

    var engage_widgets1 = page.evaluate(function(s){
      return document.getElementById('eng_m_ww_widget_120454').style.display = 'none';
    });

    var engage_widgets2 = page.evaluate(function(s){
      return document.getElementsByClassName('col_3 editorsChoose')[0].style.display = 'none';
    });

    var engage_widgets3 = page.evaluate(function(s){
      return $('.eng_m_top_ww_widget_android').hide();
    });

    var engage_widgets4 = page.evaluate(function(s){
      return $('.eng_m_ww_widget').hide();
    });

    console.log('Setting display none to PINETREST order-panel');
    var pinterest_panel2 = page.evaluate(function(s){
      return document.getElementsByClassName('order-panel')[0].style.display = 'none';
    });

    console.log('Setting backgroud color white');
    var inf_page = page.evaluate(function(s){
      return document.getElementsByClassName('infinity-page')[0].style.backgroundColor = 'white';
    });

    console.log('Setting slider backgroud color white');
    var backhr = page.evaluate(function(s){
      return document.body.style.backgroundColor = 'white';
    });

    console.log('Setting display none to PINETREST order-panel');
    var pinterest_panel = page.evaluate(function(s){
      return document.getElementsByClassName('.wysiwyg iframe, .article_photo iframe')[0].style.display = 'none';
    });


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
