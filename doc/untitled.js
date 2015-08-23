/**
 * автозаповнення таблиць
 */

var btn = $('#properties .btn-success');
var input = $('#properties input');

var arr2 = [];
for (var j = 0; j < arr.length * 2; j++) {
  if ( !(j % 2) ) arr2.push(arr[j/2])
  else arr2.push('empty');
}

var l = arr2.length;
var i = 0;

var b = setInterval(function(){
     if (i === (l - 1)) b.clearInterval();

     input.keydown();
     input.val(arr2[i]);
     input.keydown();
     btn.click();
     
     i++;
   }, 500);