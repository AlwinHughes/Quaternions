var sin_flag;
function sin(q) {
	sin_flag = true;
	var answer = q;
	for(var i = 1; i<17;i =+ 2){
		add(answer)
	}
}

function cos(q){

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
		return base;
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