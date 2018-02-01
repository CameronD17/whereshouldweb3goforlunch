var imgs = {
	"bluebird.jpg":0.350, 
	"anima.jpg":0.125, 
	"tesco.jpg":0.070,
	"lidl.png":0.105,
	"digiorgio.png":0.095,
	"bluebear.jpg":0.045,
	"sullys.jpg":0.050,
	"coro.png":0.030,
	"lezzetli.jpg":0.030,
	"margiotta.png":0.040,
	"waterofleith.png":0.025,
	"newtowndeli.jpg":0.020,
	"galway.png":0.005,
	"coffeeangel.jpg":0.010
};

var rejectionTable;

function buildRejectionTable ()	{
	var i, j, table=[];
	for (i in imgs) {
		for (j = 0; j < imgs[i]*10000; j++) {
			table.push(i);
		}
	}
	rejectionTable = table; 
}
	
function setImg (date) {  
	var dateStr = new Date(date).setUTCHours(0,0,0,0).toString();
	var tableEntry = Number(dateStr.substring(6,8) + dateStr.substring(4,6));
	document.getElementById('logo').src = "img/" + rejectionTable[tableEntry];
	console.log(rejectionTable[tableEntry]);
}

function buildCalendar () {
	YUI().use('calendar', 'datatype-date', 'cssbutton',  function(Y) {
		var calendar = new Y.Calendar({
			contentBox: "#calendar",
			width:'340px',
			date: new Date()}).render();

		var dtdate = Y.DataType.Date;

		calendar.on("selectionChange", function (ev) {
			var newDate = ev.newSelection[0];
			setImg(dtdate.format(newDate));
		});
	});	
	document.getElementById('calendar').style.display = 'none';
}

window.onload = function() {
	buildRejectionTable();
	buildCalendar();
	setImg(new Date());
};

function show () {
	document.getElementById('show').style.display = 'none';
	document.getElementById('calendar').style.display = '';
}
