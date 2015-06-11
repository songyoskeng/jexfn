var findMax = function(data){
    var i;
	var max = data[0];
	for(i=1;i<data.length;i++)
	{
		if(max<data[i]) max = data[i];
	}
	return max;
}

var data = [2, 3, 1, 7];
console.log(findMax(data));
