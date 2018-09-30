module.exports = function makeExchange(currency) {
    var a = currency;
	var b = {};

	if(currency >= 10000){
		return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	}
	if (a >= 50) {
		b["H"] = Math.floor(a/50);
		a = a%50;
	} 
	if (a >= 25) {
		b["Q"] = Math.floor(a/25);
		a = a%25;
	} 
	if (a >= 10) {
		b["D"] = Math.floor(a/10);
		a = a%10;
	} 
	if (a >= 5) {
		b["N"] = Math.floor(a/5);
		a = a%5;
	} 
	if (a >= 1) {
		b["P"] = Math.floor(a/1);
		a = a%1;
	}  
	return b;
}
