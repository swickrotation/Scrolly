var range = document.querySelector('.slider');
var field = document.querySelector('.input');

range.addEventListener('input', function(setting) { field.value = setting.target.value; });
field.addEventListener('input', function(setting) { range.value = setting.target.value; });
