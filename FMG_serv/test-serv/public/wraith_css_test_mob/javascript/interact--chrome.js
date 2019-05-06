var callback = arguments[arguments.length-1];
var ua = window.navigator.userAgent;
var a = document.querySelector('.some-class');
$('img').hide();
$('#eng_m_top_ww_widget_22691287151760344').hide();
$('#eng_m_top_ww_widget_77159216959587310').hide();
$('#ENGAGEYA_WIDGET_105031').hide();
$('#eng_m_ww_widget_120454').hide();
document.getElementsByClassName('col_3 editorsChoose')[0].style.display = 'none';
document.getElementById('eng_m_ww_widget_120454').style.display = 'none';
document.getElementById('ENGAGEYA_WIDGET_105031').style.display = 'none';
document.getElementById('eng_m_top_ww_widget_77159216959587310').style.display = 'none';
document.getElementById('eng_m_top_ww_widget_22691287151760344').style.display = 'none';
$('.eng_m_top_ww_widget_android').hide();
$('.eng_m_ww_widget').hide();
document.getElementsByClassName('order-panel')[0].style.display = 'none';
//document.getElementsByClassName('infinity-page')[0].style.backgroundColor = 'white';
//document.body.style.backgroundColor = 'white';
document.getElementsByClassName('.wysiwyg iframe, .article_photo iframe')[0].style.display = 'none';
ua = 'Mozilla/5.0 (Linux; <Android Version>; <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
';

a && a.click();
setTimeout(callback, 2000);
