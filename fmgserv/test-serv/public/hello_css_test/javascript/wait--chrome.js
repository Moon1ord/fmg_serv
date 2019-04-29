var callback = arguments[arguments.length-1];
setTimeout(function(){
    $(document).ready(function(){
      $('img').hide();
      $('#banner-adfox-4605122').hide();
      $('.banner').hide();
      $('.buzzplayer-stage').hide();
      $('.nr-player').hide();
      $('.page__branding').hide();
      $('.aside__inner').hide();
      $('.buzz-container').hide();
      $('.live-section-bg').hide();
      $('.eng_widget_sw').hide();
      $('.eng_branding').hide();
      $('.banner-adfox').hide();
    });
}, 15000);
setTimeout(callback, 20000);
