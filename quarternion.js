var sin_flag;
var cos_flag;
function sin(q) {
	sin_flag = true;
	var answer = { r:0,i:0,j:0,k:0};
	for(var i = 1; i<18;i =+ 2){
		if(sin_flag){
			answer = add(answer, power(q,i)/factorial(i));
		}else{
			answer = add(answer, negative(power(q,i)/factorial(i)));
		}
		sin_flag =! sin_flag;
	}
}

function cos(q){
	cos_flag = true;
	var answer = { r:0,i:0,j:0,k:0};
	for(var i = 0; i<17;i =+ 2){
		if(sin_flag){
			answer = add(answer, power(q,i)/factorial(i));
		}else{
			answer = add(answer, negative(power(q,i)/factorial(i)));
		}
		cos_flag =! sin_flag;
	}
}

function multiply(q,p){
	var answer = {};
	answer.r = q.r*p.r - q.i*p.i - q.j*p.j - q.k*p.k;
	answer.i = q.r*p.i + q.i*p.r + q.j*p.k - q.k*p.j;
	answer.j = q.r*p.j + q.j*p.r + q.k*p.i - q.i*p.k;
	answer.k = q.r*p.k + q.k*p.r + q.k*p.j - q.j*p.i;
	return answer;
}

function add(q,p){
	var answer = {};
	answer.r = q.r + p.r;
	answer.i = q.i + p.i;
	answer.j = q.j + p.j;
	answer.k = q.k + p.k;
	return answer; 
}

function power(base,exp){
	if(exp>1){
		power(multiply(base,base), exp-1);
	}else{
		if(exp ===0){
			return 1;
		}else{
			return base;	
		}
	}
}

function factorial(n){
	if(n>1){
		return n*factorial(n-1);
	}else{
		return 1;
	}
}
function negative(q){
	var answer = {};
	answer.r = -q.r;
	answer.i = q.i;
	answer.j = -q.j;
	answer.k = -q.k;
	return answer; 
}

function mod(q){
	return Math.power(q.r*q.r+q.i*q.i+q.j*q.j+q.k*q.k,1/2); 	
}
function toQuarternion(s){
	var string_array = s.split("");
	var answer = {};
	var number - 0; 
	var power_of_ten = 0;
	var sign = true;
	for(var i = 0; i< string_array.length; i++){
		if(string_array[i]==="-"){
			sign = false;
		}else if((string_array[i]==="+"){
			sign = true;
		}else if(!isNaN(parseInt(string_array[i]))){
			number =*10;
			power_of_ten++:
			number =+ parseInt(string_array[i]) * Math.power(10,power_of_ten-1);
		}else if



	}
}
function calculate(){
	alert(sin())
}