function buildRejectionTable (input) {
  var i, j, table=[];
  for (i in input) {
    for (j=0; j<input[i]*1000; j++) {
      table.push(i);
    }
  }
  return function() {
	var dateStr = new Date(2018,1,13).setUTCHours(0,0,0,0).toString();
	var tableEntry = Number(dateStr.substring(6,8) + dateStr.charAt(5));
    return table[tableEntry];
  }
}

var lunch = buildRejectionTable(
	{
		"bluebird.jpg":0.50, 
		"anima.jpg":0.15, 
		"digiorgio.png":0.10,
		"lidl.png":0.08,
		"tesco.jpg":0.07,
		"sullys.jpg":0.05,
		"coffeeangel.jpg":0.04,
		"newtowndeli.jpg":0.01
	}
);

window.onload = function() {
	document.getElementById('logo').src = "img/" + lunch();
};