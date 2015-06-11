var findAvg = function(data){
    var i;
	var sum = 0;
	for(i=0;i<data.length;i++)
	{
		sum+=data[i];
	}
	return sum/data.length;
}

var data = [2, 3, 1, 7];
console.log(findAvg(data));
