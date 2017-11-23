function buildRejectionTable (input) {
  var i, j, table=[];
  for (i in input) {
    for (j=0; j<input[i]*100; j++) {
      table.push(i);
    }
  }
  return function() {
    return table[Math.floor(Math.random() * table.length)];
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