var callback = arguments[arguments.length-1];
var ua = window.navigator.userAgent;
var a = document.querySelector('.some-class');
ua = 'Mozilla/5.0 (Linux; <Android Version>; <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
';

a && a.click();
setTimeout(callback, 2000);
