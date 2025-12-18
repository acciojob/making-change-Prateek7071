const makeChange = (c) => {
  // your name here
	const obj ={
		1:['q',25],
		2:['d',10],
		3:['n',5],
		4:['p',1]
	};
	let res = []
	for(let i=0;i<4 ;i++){
		let count = 0;
		const[symbol,val] = obj[i];
		while(c>=val ){
			count ++;
			c-=val;
		}
		res[symbol] =count;
	}
	return res
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

