var arr = [];




function check_name(input){
 if (typeof(input) === 'number'){
			
	}
}
for (var i = 0; i < 5; i++) {
  	var n = prompt('Введите имя?', '');
	var n2 = n;
	n2 =+n2;
	if(isNaN(n2)){
		arr.push(n);
	} else {
		alert('Ошибка ввода данных');
	}
	console.log(n);
	
}



var key= prompt('Введите имя пользователя', '');

function found_key(imena) {
  if (imena.indexOf(key) == -1) {
  return false;
  }
  return true;
}


if(found_key(arr)) {
	alert (key+', вы успешно вошли' );
} else {
  alert('Ошибка');
}
